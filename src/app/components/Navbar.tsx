"use client";
import { FaUser, FaChessKnight, FaStar, FaCubesStacked, FaBlog, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import DarkThemeToggle from "@/app/components/DarkThemeToggle";
const Navbar = () => {

  const pathname = usePathname();

  const LinkItem = ({to = "/", children}:{ to?:string, children: React.ReactNode }) => {
    const isActive =
    to === "/"
      ? pathname === "/"
      : pathname.startsWith(to);
    
    return(
        <li className={`${isActive ? "opacity-100" : "opacity-50"} hover:opacity-100 transition-all duration-1000`}><Link href={to} className="p-2 md:px-4 rounded-md cursor-pointer flex gap-3 items-center">{children}</Link></li>
    )
  }
    
  return(
  <div className="flex md:p-6 bg-primary-50 dark:bg-primary-900 md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none border-b md:border-b-0 border-primary-600 border-opacity-50">
      <div className="flex flex-row md:flex-col gap-2 w-full py-2 md:py-0 px-2">
        <h3 className="hidden md:block text-sm py-4">Categories</h3>
        <ul className="gap-y-2 font-medium w-full md:w-auto flex flex-row md:flex-col">
          <LinkItem to="/"><FaUser/><span className="hidden md:flex">About</span></LinkItem>
          <LinkItem to="/skills"><FaStar/><span className="hidden md:flex">Skills</span></LinkItem>
          <LinkItem to="/experience"><FaChessKnight/><span className="hidden md:flex">Experience</span></LinkItem>
          <LinkItem to="/projects"><FaCubesStacked/><span className="hidden md:flex">Projects</span></LinkItem>
          <LinkItem to="/blog"><FaBlog/><span className="hidden md:flex">Blog</span></LinkItem>
        </ul>
        <h3 className="hidden md:block text-sm py-4">Links</h3>
        <ul className="gap-y-2 font-medium w-full md:w-auto flex items-center md:items-start flex-row md:flex-col justify-end md:justify-start">
          <LinkItem to={`https://github.com/pncar`}><FaGithub/><span className="hidden md:flex">Github</span></LinkItem>
          <LinkItem to={`https://www.linkedin.com/in/pncar`}><FaLinkedin/><span className="hidden md:flex">Linkedin</span></LinkItem>
          <LinkItem to={`https://wa.me/541169698665`}><FaWhatsapp/><span className="hidden md:flex">Whatsapp</span></LinkItem>
          <div className="md:hidden"><DarkThemeToggle/></div>
        </ul>
      </div>
  </div>
  )
}
export default Navbar;