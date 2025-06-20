"use client";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiExpress, SiBootstrap, SiTailwindcss, SiSass, 
SiJquery, SiNodedotjs, SiRedux, SiPhp, SiLaravel, SiMysql, SiPostgresql, SiGit, SiGithub, SiAmazonwebservices, 
SiDocker, SiFirebase, SiLinux, SiPrisma, SiKnexdotjs, SiPhpmyadmin, SiDbeaver, SiWordpress}
from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { useState } from "react";

interface Filter {
    title: string;
    active: boolean;
}
interface Stack {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    filters: string[];
}
const TechStack = () => {

    const [filters,setFilters] = useState<Filter[]>([
        {title: "js", active: false},
        {title: "frontend", active: false},
        {title: "backend", active: false},
        {title: "php", active: false},
        {title: "css", active: false},
        {title: "react", active: false},
        {title: "db", active: false},
        {title: "cloud", active: false},
        {title: "containerization", active: false},
        {title: "sql", active: false}
    ]);
    
    const filteredStack = (): Stack[] => {
        const f = new Set;
        const activeFilters = filters.filter((filter:Filter)=>{
            return filter.active === true;
        });
        if(!activeFilters || activeFilters.length <= 0){
            return stack;
        }
        stack.map((s:Stack)=>{
            activeFilters.filter((filter:Filter)=>{
                if(s.filters.includes(filter.title)){
                    console.log(`${s.name} => ${s.filters} => ${filter.title}`);
                    f.add(s);
                }
            });
        });
        return (Array.from(f) as Stack[]);
    }

    const stack = [
        {name: "JavaScript", icon: <SiJavascript/>, filters: ["js"]},
        {name: "TypeScript", icon: <SiTypescript/>, filters: ["js"]},
        {name: "NextJS", icon: <RiNextjsLine/>, filters: ["js","frontend","backend","react"]},
        {name: "Express", icon: <SiExpress/>, filters: ["js","backend"]},
        {name: "React", icon: <SiReact/>, filters: ["js","frontend","react"]},
        {name: "HTML5", icon: <SiHtml5/>, filters: ["frontend"]},
        {name: "CSS3", icon: <SiCss3/>, filters: ["css","frontend"]},
        {name: "Bootstrap", icon: <SiBootstrap/>, filters: ["css","frontend"]},
        {name: "TailwindCSS", icon: <SiTailwindcss/>, filters: ["css","frontend"]},
        {name: "Sass", icon: <SiSass/>, filters: ["css","frontend"]},
        {name: "jQuery", icon: <SiJquery/>, filters: ["js","frontend"]},
        {name: "NodeJS", icon: <SiNodedotjs/>, filters: ["js","backend"]},
        {name: "Redux", icon: <SiRedux/>, filters: ["js","react","frontend"]},
        {name: "PHP", icon: <SiPhp/>, filters: ["backend","php"]},
        {name: "Laravel", icon: <SiLaravel/>, filters: ["backend","php"]},
        {name: "MySQL", icon: <SiMysql/>, filters: ["db","backend","sql"]},
        {name: "PostgreSQL", icon: <SiPostgresql/>, filters: ["db","backend","sql"]},
        {name: "Git", icon: <SiGit/>, filters: ["git"]},
        {name: "Github", icon: <SiGithub/>, filters: ["git"]},
        {name: "AWS", icon: <SiAmazonwebservices/>, filters: ["cloud","backend"]},
        {name: "Docker", icon: <SiDocker/>, filters: ["containerization"]},
        {name: "Firebase", icon: <SiFirebase/>, filters: ["backend","cloud"]},
        {name: "Linux", icon: <SiLinux/>, filters: ["backend"]},
        {name: "Prisma", icon: <SiPrisma/>, filters: ["backend","js","sql","db"]},
        {name: "Knex", icon: <SiKnexdotjs/>, filters: ["backend","js","sql","db"]},
        {name: "PHPMyAdmin", icon: <SiPhpmyadmin/>, filters: ["backend","sql","db"]},
        {name: "DBeaver", icon: <SiDbeaver/>, filters: ["backend","sql","db"]},
        {name: "Wordpress", icon: <SiWordpress/>, filters: ["php"]}
    ];

    const toggleFilter = (title:string) => {
        const r = filters.map((filter:Filter)=>{
            if(filter.title === title){
                filter.active = !filter.active;
            }
            return filter;
        });
        setFilters(r);
    }

    const Panel = ({item}:{item: Stack}) => {
        return(
            <div className="bg-opacity-50 hover:bg-opacity-100 bg-white dark:bg-primary-900 transition-all duration-300 p-4 rounded-md shadow-md border border-t-primary-50/50 dark:border-t-primary-600/50 border-x-primary-200 dark:border-x-primary-800/50 boder-b-primary-300 dark:border-b-primary-950/50 flex items-center justify-center hover:border-blue-600">
                <div className="flex flex-col text-center justify-center items-center space-y-2">
                    {item.icon && <div className="text-brand-500 text-3xl">{item.icon}</div>}
                    <p className="text-xs">{item.name}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-wrap gap-2">
                {filters.map((filter:Filter,key:number)=><div key={key} onClick={()=>{toggleFilter(filter.title)}} className={`${filter.active ? "opacity-100" : "opacity-50 dark:opacity-30"} text-primary-950 dark:text-primary-300 transition-all cursor-pointer p-2 px-4 rounded-md bg-primary-300 dark:bg-primary-950 uppercase text-xs`}>{filter.title}</div>)}
            </div>
            <div className="container w-full mx-auto justify-center grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-2 cursor-default">
                {filteredStack().map((item: Stack,key:number)=><Panel key={key} item={item}/>)}
            </div>
        </div>
    )
}
export default TechStack;