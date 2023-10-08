import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailPage from "./ServiceDetailPage";


const Service = () => {

    const services = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = services?.find(service => service.id === idInt);
    return (
        <div>
            <ServiceDetailPage service={detail} ></ServiceDetailPage>
        </div>
    );
};

export default Service;