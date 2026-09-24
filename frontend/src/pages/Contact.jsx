import {
  FaMapMarkedAlt,
  FaMobileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa"
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <section
        className="relative h-[320px] bg-cover"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div>
            <h1 className="great-vibes text-5xl md:text-6xl text-black mb-4">
              About Us
            </h1>

            <div className="flex items-center gap-3 text-lg font-semibold text-black">
              <span>Home</span>

              <span className="text-primary text-2xl">›</span>

              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-[100px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-banner.jpg')",
        }}
      ></section>

      {/* Contact */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="great-vibes text-primary text-4xl mb-2">Contact Us</p>

            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Get In Touch
            </h1>
          </div>

          {/* Contact Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Location */}

            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex gap-5">
                <FaMapMarkedAlt className="text-primary text-5xl shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Location</h3>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    Tours, 10001, 5th Avenue, #06
                    <br />
                    lane street, NY - 62617.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}

            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex gap-5">
                <FaMobileAlt className="text-primary text-5xl shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold mb-3">Give us a call</h3>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    +12 234-45-67-63
                    <br />
                    +12 404-11-22-99
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}

            <div className="bg-white p-8 shadow-sm hover:shadow-lg transition">
              <div className="flex gap-5">
                <FaEnvelopeOpenText className="text-primary text-5xl shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold mb-3">Help Desk</h3>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    info@gmail.com
                    <br />
                    support@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}

          <div className="w-full h-[450px] overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
}

export default Contact;
