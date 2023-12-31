import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="my-8 contact-us-container container mx-auto p-8">
      <h2 className="text-center text-5xl font-bold text-cyan-800 mb-12">Contact Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex-none w-full md:w-1/2">
          <img src={"https://i.ibb.co/gPszCvw/team.png"} alt="Team" className="w-full h-auto" />
        </div>
        <div className="flex-none w-full md:w-1/2 ml-8 lg:mt-20">
          <p className="mb-4">
            Welcome to our tech and gaming event management company. We are passionate about creating unforgettable experiences for both tech enthusiasts and gaming communities. <br /> Whether you're planning a conference, tournament, or any other event, we've got you covered.
          </p>
          <p className="mb-4">
            Feel free to reach out to us for inquiries, collaborations, or any questions you may have. We're here to make your events extraordinary!
          </p>
          <div className="contact-details">
            <p>
              <FaEnvelope className="inline-block mr-2" />
              Email: info@company.com
            </p>
            <p>
              <FaPhone className="inline-block mr-2" />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
