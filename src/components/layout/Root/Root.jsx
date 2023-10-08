import { Outlet } from "react-router-dom";
import Navbar from "../../page/Home/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-8xl mx-auto font-roboto">
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;