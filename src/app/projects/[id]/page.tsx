import { getProject } from "@/lib/contentful";
import { notFound } from "next/navigation";
import GoBack from "@/app/components/GoBack";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getProject(params.slug)

  return {
    title: `${post.fields.title} | Pablo Nicolás, Fullstack Developer`,
  }
}

const Project = async ({ params }: PageProps) => {
    const { id } = await params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const project:any = await getProject(id);

    if (!project) {
      return notFound();
    }
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
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
              {code}
            </SyntaxHighlighter>
          )},
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node:any, children:React.ReactNode) => {
            return <div className="p-2">{children}</div>
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { file, description } = node.data.target.fields;
            const url = file.url.startsWith('//') ? `https:${file.url}` : file.url;
            return (
              <img
                src={url}
                alt={description || 'Embedded image'}
                className="my-4 rounded-md border border-primary-700/50 shadow-lg"
              />
            );
          },
        },
    };


    return(
        <div className="w-full 2xl:w-3/4 m-auto">
            {project && 
            <div>
                <div className="h-64 relative overflow-hidden rounded-md outline-1 outline-primary-700/30" style={
                    {
                        backgroundImage: `url(${project.fields.thumbnail?.fields.file.url || `https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png`})`,
                        backgroundSize: "cover"
                    }}>
                    <div className="absolute bottom-0 p-8 w-full bg-gradient-to-b from-transparent via-primary-900/70 to-primary-900 h-full flex flex-col justify-end">
                        <p className="uppercase text-xs">{project.fields.type}</p>
                        <h3 className="text-3xl font-semibold text-brand-500 text-shadow-sm">{project.fields.title}</h3>
                    </div>
                </div>
                <div className="py-6 flex flex-col space-y-2">
                    <div className="rich-text-div">{documentToReactComponents(project.fields.main,options)}</div>
                    <ul className="flex text-[0.7em] gap-2 uppercase text-primary-300 tracking-wider font-semibold">
                        {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        project.fields.items?.map((tag:string,key:number)=><li key={key} className="p-1 px-3 rounded-md bg-primary-800">{JSON.stringify(tag)}</li>)}
                    </ul>
                </div>
            </div>}
            <GoBack/>
        </div>
    )
}
export default Project;