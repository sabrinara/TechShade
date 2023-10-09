import { Outlet } from "react-router-dom";
import Navbar from "../../page/Home/Navbar/Navbar";
import Footer from "../../page/Home/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-8xl mx-auto font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;