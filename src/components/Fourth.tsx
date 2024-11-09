import "../style/style.css";

export default function Page(){
    return(
        <>
        <hr/>
     <section className="fourth" id="contact">
        <form action="#" className="form">
        <label >Full Name</label>
        <input type="text" id="fname"></input>
        <label >Email</label>
        <input type="email" id="email"></input>
        <label >Contact No</label>
        <input type="phone" id="number"></input>
        <label >Message</label>
        <textarea id="message"></textarea>
        <input type="submit"></input>
        </form>
     </section>
        </>
    )
}