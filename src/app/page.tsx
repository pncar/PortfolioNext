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
            <p className="text-xs uppercase tracking-wider">Hi, Im <span className="font-sans font-semibold">Pablo Nicolás</span></p>
            <h1 className="text-5xl md:text-6xl">Fullstack Web Developer</h1>
            <p>Developer blending frontend craft with backend logic to build performant, data-driven web applications that integrate external APIs and services. 🦜</p>
            <div className="flex space-x-2 font-semibold text-primary-300">
              <Link href="/projects" className="p-2 px-4 rounded-md bg-brand-950/80 hover:bg-brand-800/100 text-sm cursor-pointer  transition-all">View Projects</Link>
              <Link href="/contact" className="p-2 px-4 rounded-md bg-brand-950/80 hover:bg-brand-800/100 text-sm cursor-pointer transition-all">Contact Me</Link>
            </div>
            <div className="flex space-x-4 text-primary-900">
              <Link href="/"><FaWhatsapp className="text-2xl"/></Link>
              <Link href="/"><FaLinkedin className="text-2xl"/></Link>
              <Link href="/"><FaGithub className="text-2xl"/></Link>
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
