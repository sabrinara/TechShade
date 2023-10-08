import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailPage from "./ServiceDetailPage";


const Service = () => {
    const [service, setService] = useState();
    const services = useLoaderData();
    // console.log('service',services);
    const {id} = useParams();

    useEffect(() => {
        const detail = services?.find(service => service.id === id)
        setService(detail);
        // console.log('asvsdv',detail);
    }, [id, services]);


    return (
        <div>
            <ServiceDetailPage service={service} ></ServiceDetailPage>
        </div>
    );
};

export default Service;