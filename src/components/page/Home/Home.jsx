
import ContactUs from "../ContactUs";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import { useEffect, useState } from "react";

const Home = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then (res => res.json())
        .then (data => {
            setService(data);
        })
        .catch (error => console.error(error));
    },[]);
    return (
        <div className="font-roboto">
            <Header></Header>
            <Services services={service}></Services>
            <ContactUs></ContactUs>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;