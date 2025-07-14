import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import TechStack from "@/app/components/TechStack";
import Image from "@/images/blue.png";

export default function Home() {
  
  return (
    <div className="flex flex-col gap-y-2">
      <div className="container m-auto w-full flex items-center justify-center md:py-6">
        <div className="p-4 bg-brand-600 bg-gradient-to-bl from-cyan-900 via-blue-500 to-teal-750 rounded-md flex flex-col-reverse md:flex-row items-center text-primary-300 gap-y-4">
          <div className="flex flex-col w-full space-y-2 md:space-y-4 p-2 md:p-8 text-brand-950">
            <p className="text-xs uppercase tracking-wider">Hello, Im <span className="font-sans font-semibold">Pablo Nicolás</span></p>
            <h1 className="text-5xl md:text-6xl">Fullstack Web Developer</h1>
            <p>Web developer with 5 years of experience building and maintaining frontend and full-stack applications. Most of my stack involves using tools like Next.js, React, Express, PHP, and WordPress. Experienced with relational databases (MySQL), modern CSS frameworks (Tailwind), and version control (Git). Experience with more older platforms like Wordpress and able to work with more modern headless CMSs when needed. Able to solve practical problems, debugging issues, and keeping code maintainable, also to pick up new tools quickly and adapt to different project needs. 🦜</p>
            <div className="flex items-center gap-x-3">
              <div className="flex gap-x-2 font-semibold text-primary-300">
                <Link href="/projects" className="p-2 px-4 rounded-md bg-brand-950 hover:bg-brand-800 text-sm cursor-pointer  transition-all">View Projects</Link>
              </div>
              <div className="flex gap-x-2 text-primary-900">
                <Link href="/"><FaWhatsapp className="text-2xl"/></Link>
                <Link href="/"><FaLinkedin className="text-2xl"/></Link>
                <Link href="/"><FaGithub className="text-2xl"/></Link>
              </div>
            </div>
          </div>
          <div className="w-80">
            <img src={Image.src} className="w-full object-cover"/>
          </div>
        </div>
      </div>
      <TechStack/>
    </div>
  );
}
