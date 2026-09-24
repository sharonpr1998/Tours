
import { FaCertificate, FaMoneyBillWave } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[670px]">
            <img
              src="/tourGirl.jpg"
              alt="Travel destination"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Small Heading */}
            <p className="great-vibes text-primary text-4xl mb-2">
              Our Features
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-7">
              Why Choose Tours!
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempudffel. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start gap-6 mb-12">

              {/* Icon */}
              <div className="w-[70px] h-[70px] shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
                <FaCertificate className="text-primary text-3xl" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Professional and Certified
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit.
                </p>
              </div>

            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6">

              {/* Icon */}
              <div className="w-[70px] h-[70px] shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
                <FaMoneyBillWave className="text-primary text-3xl" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Get Instant Tour Bookings
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;