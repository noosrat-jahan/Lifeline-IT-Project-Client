import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../../assets/Website Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <footer className="text-white px-4 md:px-20 ">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="text-left ">
          <div className="flex items-center gap-2 mb-3">
            <Link to="/"><img src={logo} alt="Logo" className="" /></Link>
          </div>
          <p className="text-sm text-gray-200 text-justify leading-relaxed">
            Lifeline IT Training Institute is a Govt. approved IT Training
            center providing industry-relevant since 2021. We offer affordable,
            career-focused courses in digital skills to help students thrive in
            freelancing and professional careers.
          </p>

          <Link to="/contact">
            <button className="mt-4 shadow-xl px-6 py-2 bg-[#4a64f5] hover:bg-[#3a53e0] text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Contact us →
            </button>
          </Link>
        </div>

        {/* Useful Links */}
        <div className="text-left lg:ml-20">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
       <ul className="space-y-1 text-sm text-gray-200 [&>li:hover]:text-gold cursor-pointer">
            <li>Free Software</li>
            <li>Free Resources</li>
            <li>Certificate Verify</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms & Condition</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Our Company */}
        <div className="text-left  lg:ml-10">
          <h3 className="text-lg font-semibold mb-3">Our Company</h3>
          <ul className="space-y-1 text-sm text-gray-200 [&>li:hover]:text-gold cursor-pointer">
            <li>Join as a Mentor</li>
            <li>Our Team</li>
            <li>Our Agency</li>
            <li>Freelancers Story</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-3">Contact with us</h3>
          <ul className="text-sm text-gray-200 space-y-1 [&>li:hover]:text-gold cursor-pointer">
            <li>
              Call:{" "}
              <span className="text-yellow-400 font-semibold">
                01887 893100
              </span>{" "}
              (24x7)
            </li>
            <li>
              WhatsApp:{" "}
              <span className="text-yellow-400 font-semibold">
                01867 101740
              </span>{" "}
              (24x7)
            </li>
            <li>
              E-mail:{" "}
              <span className="text-green-400">support@lifelineit.com</span>
            </li>
            <li>
              Location: Khan Building (3rd Floor), <br />
              Sk. Mujib Road, Chowmuhuni, Agrabad, Chattogram.
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
        <SocialIcon icon={<FaWhatsapp />} color="#25D366" />
        <SocialIcon icon={<FaFacebookF />} color="#3b5998" />
        <SocialIcon icon={<FaYoutube />} color="#FF0000" />
        <SocialIcon icon={<FaInstagram />} color="#C13584" />
        <SocialIcon icon={<FaTiktok />} color="#000000" />
        <SocialIcon icon={<FaTelegramPlane />} color="#0088cc" />
        <SocialIcon icon={<FaLinkedinIn />} color="#0077b5" />
      </div>

      {/* Bottom Pay With */}
      <div className="flex items-center mt-10 gap-8">
        <p className="text-white text-sm">Pay with</p>
        <div className=" border border-white/20 rounded-xl p-6 w-5/6">
          {/* Payment logos here if needed */}
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, color }) => {
  return (
    <div
      className="w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 8px ${color}80, inset 0 1px 1px #fff3`,
      }}
    >
      <div className="text-white text-lg">{icon}</div>
    </div>
  );
};

export default Footer;
