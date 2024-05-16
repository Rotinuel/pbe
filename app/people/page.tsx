import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


function People(){
    return (
        <div className="h-screen flex flex-col  justify-between">
            <Navbar/>
            <div className="container px-6 py-6 pt-24 leading-[32px]">
            <h1>OUR PEOPLE</h1>
            <h2>Global Advisory Board</h2>
        
        Technical Partners
        Prof. Gunter Pauli
        
        Executive Management
        Sola A. Gegele, Co-founder/CEO
        Fife Banks, Co-founder/COO
        Victor Ayo Oritedi, Director, Business Development
        AbdulRahman Odewale, Team Lead, Special Projects
        
        Staff Members
        Grace Eluma
        </div>
        <Footer/>
        </div>
        
    )
}

export default People;