import { getBlogPost } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import GoBack from "@/app/components/GoBack";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const Blog = async ({ params }: PageProps) => {
    const { id } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post: any = await getBlogPost(id);

    const options = {
        renderMark: {
          [MARKS.CODE]: (text:any) => {
            let language = 'javascript'; 
            let code = text;
        
            const match = text.match(/^!code="(.+?)"\s*\n/);
            if (match) {
              language = match[1];
              code = text.replace(match[0], '');
            }

          return (
            <SyntaxHighlighter language={language} style={tomorrow}>
              {code}
            </SyntaxHighlighter>
          )},
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node:any, children:React.ReactNode) => {
            return <div className="py-2">{children}</div>
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { file, description } = node.data.target.fields;
            const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
            return (
              <img
                src={url}
                alt={description || 'Embedded image'}
                className="my-4 rounded-md"
              />
            );
          },
        },
    };

    return(
        <div className="py-6 px-2 xl:px-0 xl:w-2/3 m-auto">
            <GoBack/>
            <div className="py-4 space-y-6 text-primary-300 leading-relaxed text-justify text-wrap">
              <div className="rich-text-div">
                {documentToReactComponents(post.fields.main,options)}
              </div>
            </div>
        </div>
    )
}

export default Blog;