import { Link } from "react-router-dom";

const ServiceDetailPage = ({ service }) => {
    const { image, title, short_description, data1, data2, data3, data4, data5 } = service || {};
    return (
        <div>
            <div className="m-10">
                <h1 className="text-3xl text-cyan-800 lg:text-5xl my-10 font-bold text-center">{title}</h1>
                <img className="w-full md:w-[80%] md:h-[60vh]  lg:w-[80%] lg:h-[80vh] mx-auto my-auto" src={image} alt="" />
                <p>{short_description}</p>
                <br />
                <ul className="list-disc ml-10">
                    <li>{data1} </li>
                    <li>{data2} </li>
                    <li> {data3}</li>
                    <li>{data4} </li>
                    <li>{data5}</li>

                </ul>
                <p>More more information you can visit our <Link to='/detail' className="btn text-cyan-900">Packages</Link></p>
            </div>
        </div>
    );
};

export default ServiceDetailPage;