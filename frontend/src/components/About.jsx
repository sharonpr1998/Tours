import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE */}
          <div>
            <img
              src="/tourPack.jpg"
              alt="Travel"
              className="w-full h-[580px] object-cover rounded-lg"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div>

            {/* Small heading */}
            <p className='great-vibes text-4xl text-primary'>
              About Us
            </p>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
              Plan Your Trip with Tours
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-8 mt-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-lg">
                  2000+ Our Worldwide Guide
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-lg">
                  100% Trusted Tour Agency
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-lg">
                  24+ Years of Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-primary text-lg" />
                <span className="text-lg">
                  100% Travelers are Happy
                </span>
              </div>

            </div>

            {/* Button */}
            <button className="mt-10 bg-primary text-white px-9 py-4 rounded-full font-bold text-lg hover:opacity-90 transition">
              Booking Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;