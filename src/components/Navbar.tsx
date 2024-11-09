import Link from "next/link";
import "../style/style.css";

export default function Navbar(){
    return(
        <nav className="nav">
            <h1 className="nav-head">Hashir Raees</h1>
        <ul className="nav-links">
            <li><Link className="link" href="/">Home</Link></li>
            <li><Link className="link" href="#portfolio">Projects</Link></li>
            <li><Link className="link" href="#skills">Skills</Link></li>
            <li><Link className="link" href="#contact">Contact</Link></li>
        </ul>
        </nav>
    )
}