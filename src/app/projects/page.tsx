import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";
import { getProjects } from "@/lib/contentful";

const Projects = async () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projects = await getProjects() as any[];

    return(
        <div className="container w-full m-auto flex flex-col gap-2">
                <h1 className="text-4xl">Projects</h1>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                {projects.map((p) => (
                    <li key={p.sys.id} className="flex flex-col group relative h-64 rounded-md overflow-hidden border border-primary-600/50">
                        <Link href={`/projects/${p.sys.id}`} className="w-full overflow-hidden absolute h-full">
                            <img src={p.fields.thumbnail?.fields.file.url || `https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png`} className="transition-all scale-125 group-hover:scale-100 w-full h-full object-cover"/>
                        </Link>
                        <div className="gap-1 bg-gradient-to-b from-transparent to-primary-900 w-full py-2 absolute z-10 h-full flex flex-col justify-end p-4">
                            <span className="text-xs uppercase text-brand-500 tracking-wider">{p.fields.type || "uncategorized"}</span>
                            <Link href={`/projects/${p.sys.id}`} className="block">{p.fields.title}</Link>
                            <ul className="flex gap-1 text-xs">
                                {p.fields.repository && <li className="bg-primary-600 hover:bg-primary-500 transition-all p-1 px-3 rounded-md"><Link href={p.fields.repository} className="flex items-center gap-1"><FaGithub/><span>Repo</span></Link></li>}
                                {p.fields.live && <li className="bg-primary-600 hover:bg-primary-500 transition-all p-1 px-3 rounded-md"><Link href={p.fields.live} className="flex items-center gap-1"><FaLink/><span>Live</span></Link></li>}
                            </ul>
                        </div>
                    </li>
                ))}
                </ul>
        </div>
    )
}
export default Projects;