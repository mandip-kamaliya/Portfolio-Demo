import About from "./Component/About/About";
import Contect from "./Component/Contect/Contect";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Mywork from "./Component/My work/Mywork";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";


export default function  App(){
    return <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About> 
        <Services></Services> 
        <Mywork></Mywork>
        <Contect></Contect>
        <Footer></Footer> 
    </div>
}