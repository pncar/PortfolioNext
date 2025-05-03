import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import TechStack from "@/app/components/TechStack";
import { Aref_Ruqaa } from "next/font/google";

export default function Home() {
  
  return (
    <div className="flex flex-col gap-y-2">
      <div className="container m-auto w-full flex items-center justify-center md:py-6">
        <div className="p-4 bg-brand-600 bg-gradient-to-bl from-cyan-500 via-blue-600 to-cyan-700 rounded-md flex flex-col-reverse md:flex-row items-center text-primary-300 gap-y-4">
          <div className="flex flex-col space-y-2 md:space-y-4 p-2 md:p-8">
            <p className="text-xs uppercase tracking-wider text-brand-950">Hi, I'm <span className="font-sans font-semibold">Pablo Nicolás</span></p>
            <h1 className="text-5xl md:text-6xl text-brand-300">Fullstack Web Developer</h1>
            <p>Development of Web Applications in JavaScript, PHP, and other languges.</p>
            <div className="flex space-x-2">
              <Link href="/projects" className="p-2 px-4 rounded-md bg-brand-500/80 hover:bg-brand-500/100 text-sm cursor-pointer  transition-all">View Projects</Link>
              <Link href="/contact" className="p-2 px-4 rounded-md bg-brand-500/80 hover:bg-brand-500/100 text-sm cursor-pointer transition-all">Contact Me</Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/"><FaWhatsapp className="text-2xl"/></Link>
              <Link href="/"><FaLinkedin className="text-2xl"/></Link>
              <Link href="/"><FaGithub className="text-2xl"/></Link>
            </div>
          </div>
          <div>
            <img src={`https://amiralirashidi.github.io/assets/images/front-end-developer.png`}/>
          </div>
        </div>
      </div>
      <TechStack/>
    </div>
  );
}
