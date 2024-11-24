import "../style/style.css"
export default function Page(){
    return(
        <>
        <hr/>
        <section className="second" id="education">
        <h1 className="edu">Education</h1>
        <div className="big">
        <div className="mat">
            <h1 className="text-red-500 text-xl font-bold">Matriculation</h1>
            <h2 className="text-white text-base">Pak Oxford Grammer School</h2>
            <span className="text-red-700 text-sm">2022</span>
        </div>
        <div className="int">
            <h1 className="text-red-500 text-xl font-bold">Intermediate</h1>
            <h2 className="text-white text-base">Dj Sindh Govt Science College</h2>
            <span className="text-red-700 text-sm">2024</span>
        </div>
        <div className="course">
            <h1 className="cour">Courses</h1>
            <h1 className="gov">Governor Initiative For Web 3.0, Artifcial Intelligence<br/>and Metaverse</h1>
        </div>
        </div>
        </section>
        </>
    )
}