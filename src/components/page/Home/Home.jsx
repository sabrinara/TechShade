import Header from "./Header/Header";
import Footer from "./Footer/Footer";
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
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;