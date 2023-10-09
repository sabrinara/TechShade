import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from "./ServiceCard";
import { useEffect } from 'react';

const Services = ({ services }) => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1500,
            offset: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="py-24 bg-emerald-100">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:m-14 lg:m-16">
                {services?.map((service, index) => (
                    <div key={service.id} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        <ServiceCard service={service}></ServiceCard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
