import ServiceCard from "./ServiceCard";
const Services = ({services}) => {
   
    return (
        <div className="py-24 bg-emerald-100">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:m-14 lg:m-16"> 
        
        {
            services?.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
            
           
        </div>
        </div>
        
    );
};

export default Services;
