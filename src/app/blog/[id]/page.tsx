import { getBlogPost } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import GoBack from "@/app/components/GoBack";

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
        renderNode: {
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
        <div className="py-6">
            <h2 className="text-3xl font-semibold">{post.fields.title}</h2>
            <div className="py-4 space-y-6 text-primary-300 leading-relaxed text-justify text-wrap">
                {documentToReactComponents(post.fields.main,options)}
            </div>
            <GoBack/>
        </div>
    )
}

export default Blog;