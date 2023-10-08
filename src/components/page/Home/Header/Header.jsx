

const Header = () => {
    return (
        <div className="hero  " style={{ height:'70vh',backgroundImage: 'url(https://i.ibb.co/P9wjStB/Polygon-Luminary.png)' }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-200 ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                    <p className=" text-lg font-bold">Technology is best when it brings people together...</p>
                    <br /> 
                    <p className="text-sm font-mono">In our website you can explore events you like to arrange. Our team will support you to manage events manually & technically.</p>

                </div>
            </div>
        </div>
    );
};
//min-h-screen
export default Header;