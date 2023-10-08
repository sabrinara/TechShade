import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { id, image, title, short_description, price } = service || {};

    return (
      
            
            <div className="card lg:h-[20rem] lg:card-side bg-base-100 shadow-xl">
                <figure className=" lg:w-[50%]" >
                    <img src={image} className="w-full h-96 md:h-64 lg:h-full lg:object-center " alt="Album" />
                </figure>
                <div className="card-body lg:w-[50%]">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className=" text-ellipsis overflow-hidden text-sm">{short_description}</p>
                    <p className="text-cyan-900 font-bold">Price: {price} $</p>
                    <div className="card-actions justify-start">
                        <Link to={`/service/${id}`}><button className="py-2 px-6 rounded-md bg-cyan-700 text-white ">See More</button></Link>
                    </div>
                </div>
            </div>

    );
};

export default ServiceCard;