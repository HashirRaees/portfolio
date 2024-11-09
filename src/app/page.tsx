import Link from "next/link";
import Image from "next/image";
import {RiInstagramLine, RiLinkedinFill, RiGithubFill, RiFacebookFill} from "@remixicon/react";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Footer from "../components/Footer";

export default function Page(){
  return(
    <>
    <section className="section">
    <Image className="profile" src="/image1.png" alt="hero" height={350} width={350}></Image>
    <div className="text">
    <h1> Hi, I'm Hashir Raees <br/> A passionate <span>Web Developer</span></h1>
    <p> Welcome to my web developer portfolio! I am<br/>
        a skilled web developer with a passion for creating <br/>engaging and user-friendly websites.<br/>
        I specialize in HTML, CSS, and TypeScript.<br/> 
        My goal is to help you build your next website<br/> and make it a successful one.</p> 
        <button><Link href="http://hashirrais13@gmail.com" className="btn-link" target="_blank">Contact me</Link></button>
      <div className="icons">
        <Link href="https://www.instagram.com/hashir._.raees/" target="_blank"><RiInstagramLine size={45} color="red" className="insta"/></Link>
        <Link href="https://www.linkedin.com/in/hashir-raees-1311752ba/" target="_blank"><RiLinkedinFill size={45} color="red" className="linked"/></Link>
        <Link href="https://github.com/HashirRaees" target="_blank"><RiGithubFill size={45} color="red" className="git"/></Link>
        <Link href="https://www.facebook.com/hashir.rais" target="_blank"><RiFacebookFill size={45} color="red" className="face"/></Link>
        </div>
    </div>
    </section>
    <Second />
    <Third/>
    <Fourth/>
    <Footer/>
    </>
  )
}