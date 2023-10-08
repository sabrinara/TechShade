const ServiceDetailPage = ({ service }) => {
    const {image,title,short_description} = service || {};
    return (
        <div>
             <div className="m-10">
                <h1 className="text-3xl text-cyan-800 lg:text-5xl my-10 font-bold text-center">{title}</h1>
                <img className="w-full md:w-[80%] md:h-[60vh]  lg:w-[80%] lg:h-[80vh] mx-auto my-auto" src={image} alt="" />
                <p>{short_description}</p>
             </div>
        </div>
    );
};

export default ServiceDetailPage;