
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#10264d] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Address : Tours, 10001, 5th Avenue, #06 lane
                street, NY- 62617.
              </p>

              <p>
                Phone Number: +1(21) 234 4567
              </p>

              <p>
                Email : info@example.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaGooglePlusG />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaGithub />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-lg text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Work with us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Explore
            </h3>

            <ul className="space-y-5 text-lg text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog Posts
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Our Partners
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  License & uses
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Subscribe
            </h3>

            <form className="space-y-3">

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-full
                  bg-white
                  text-gray-600
                  outline-none
                  text-lg
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  px-6
                  py-4
                  rounded-full
                  bg-primary
                  text-white
                  font-bold
                  text-lg
                  hover:bg-blue-700
                  transition
                  duration-300
                "
              >
                Subscribe
              </button>

            </form>

            <p className="text-gray-300 text-lg leading-relaxed mt-5">
              Subscribe to our mailing list and get updates to
              your email inbox.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-7 text-center">

          <p className="text-lg text-white">
            © 2021 Tours. All rights reserved. Design by{" "}
            <span className="text-primary">
              W3Layouts
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;