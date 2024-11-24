import {RiJavascriptFill,RiHtml5Fill,RiCss3Fill,RiNextjsFill} from "@remixicon/react";
import "../style/style.css";

export default function Page(){
    return(
        <>
        <hr/>
        <section className="third" id="skills">
            <h1 className="skills">Skills</h1>
            <div className="html">
                <RiHtml5Fill size={120} color="red" className="html5" />
                <h1 className="h1">Html 5</h1>
            </div>
            <div className="css">
                <RiCss3Fill size={120} color="red" className="css3"/>
                <h1 className="h1">Css 3</h1>
            </div>
            <div className="java">
                <RiJavascriptFill size={120} color="red" className="script"/>
                <h1 className="h1">Javascript</h1>
            </div>
            <div className="next">
                <RiNextjsFill size={120} color="red" className="js"/>
                <h1 className="h1">Next.js</h1>
            </div>
        </section>
        </>
    )
}