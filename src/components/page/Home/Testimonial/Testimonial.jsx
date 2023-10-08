import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    const testimonials = [
        {
            image: "https://i.ibb.co/Tw9vnsc/avatar14.jpg",
            text: "I had an amazing experience with this people! Their team helped me organize a flawless event that exceeded all my expectations.",
            author: "Jessica Brown",
        },
        {
            image: "https://i.ibb.co/WDb0Vjr/avatar3.jpg",
            text: "This people made event planning so easy and stress-free.Their attention to detail and creative ideas made our event truly special.",
            author: "Smith Williams",
        },
        {
            image: "https://i.ibb.co/znBD4hp/avatar1.jpg",
            text: "I can't thank them enough for making my dream wedding a reality. From venue selection to decorations, everything was perfect.",
            author: "Emma Watson",
        },
    ];

    return (
        <div>
            <div className="w-full h-[5px] bg-cyan-950 my-2"></div>
            <div className="py-12 bg-emerald-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-cyan-900">What Our Clients Says..</h2>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-6 bg-emerald-50 rounded-xl  shadow-2xl">
                                <p className='flex justify-center'><img className="rounded-full" src={testimonial.image} alt="" />
                                </p>
                                <p className="text-emerald-900 mt-2">- {testimonial.author}</p>
                                <div className="flex items-center justify-center mb-4">
                                    <FaStar className="text-teal-700 text-2xl" />
                                    <FaStar className="text-teal-700 text-2xl" />
                                    <FaStar className="text-teal-700 text-2xl" />
                                    <FaStar className="text-teal-700 text-2xl" />
                                    <FaStar className="text-teal-700 text-2xl" />
                                </div>

                                <p className="text-gray-800">{testimonial.text}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Testimonial;