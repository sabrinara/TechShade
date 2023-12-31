import { FaFacebook, FaInstagram, FaTwitter , } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-sky-950 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-sky-950 text-white text-center ">

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-400 focus:text-cyan-400"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-500 focus:text-cyan-500"
                        >
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-500 focus:text-cyan-500"
                        >
                            Contribute
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-500 focus:text-cyan-500"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
               
            </div>
             <div className="grid grid-flow-col gap-6 text-white m-6 justify-center">
                    <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                    <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
                    <a href="https://twitter.com/"><FaTwitter></FaTwitter></a>
                </div>
            <hr className="my-8 border-blue-gray-50" />
            <p className="block text-white text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                © 2023, TechShade -Tech & Gaming Event Management Website<br /> <small>All Rights Reserved</small>
            </p>
        </footer>
    );
};

export default Footer;