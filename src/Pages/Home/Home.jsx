import { useEffect } from "react";
import Banner from "../../Component/Banner/Banner";
import Partner from "../../Component/Partner/Partner";
import Service from "../../Component/Service/Service";
import Team from "../../Component/Team/Team";
import Testymonial from "../../Component/Testymonial/Testymonial";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Home = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <div data-aos="fade-down-right"><Banner /></div>
            <div data-aos="fade-down-left"><Service /></div>
            <div data-aos="fade-up-left"><Testymonial /></div>
            <div data-aos="fade-up-right"> <Team /></div>
             <Partner />
           

        </div>
    );
};

export default Home;