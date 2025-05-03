import { FaUser, FaChessKnight, FaStar, FaCubesStacked, FaBlog, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa6";
import Link from "next/link"
const Navbar = () => {

    const LinkItem = ({to = "/", children}:{ to?:string, children: React.ReactNode }) => {
        return(
            <li className="opacity-80 hover:opacity-100 transition-all duration-1000"><Link href={to} className="p-2 px-4 rounded-md cursor-pointer flex gap-3 items-center">{children}</Link></li>
        )
    }
    
    return(
    <div className="flex md:p-6">
        <div className="flex flex-col gap-2 w-auto p-2">
          <h3 className="hidden md:block">Categories</h3>
          <ul className="space-y-2 font-medium">
            <LinkItem><FaUser/><span className="hidden md:flex">About</span></LinkItem>
            <LinkItem to="/skills"><FaStar/><span className="hidden md:flex">Skills</span></LinkItem>
            <LinkItem to="/experience"><FaChessKnight/><span className="hidden md:flex">Experience</span></LinkItem>
            <LinkItem to="/projects"><FaCubesStacked/><span className="hidden md:flex">Projects</span></LinkItem>
            <LinkItem to="/blog"><FaBlog/><span className="hidden md:flex">Blog</span></LinkItem>
          </ul>
          <h3 className="hidden md:block">Links</h3>
          <ul className="space-y-2 font-medium">
            <LinkItem to={`https://github.com/pncar`}><FaGithub/><span className="hidden md:flex">Github</span></LinkItem>
            <LinkItem to={`https://www.linkedin.com/in/pncar`}><FaLinkedin/><span className="hidden md:flex">Linkedin</span></LinkItem>
            <LinkItem to={`https://wa.me/541169698665`}><FaWhatsapp/><span className="hidden md:flex">Whatsapp</span></LinkItem>
          </ul>
        </div>
    </div>
    )
}
export default Navbar;