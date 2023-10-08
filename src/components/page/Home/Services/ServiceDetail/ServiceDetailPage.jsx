const ServiceDetailPage = ({ service }) => {
    const {image,title,short_description} = service || {};
    return (
        <div>
             <div>
                <h1>{title}</h1>
                <img src={image} alt="" />
                <p>{short_description}</p>
             </div>
        </div>
    );
};

export default ServiceDetailPage;