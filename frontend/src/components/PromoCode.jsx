
import {
  FaApple,
  FaGooglePlay,
  FaWindows,
} from "react-icons/fa";

const PromoCode = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[540px]">
            <img
              src="/thumbsup.jpg"
              alt="Get our promocode"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Small Heading */}
            <p className="text-black font-semibold text-base mb-3">
              FOR 30% DISCOUNT
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              GET OUR PROMOCODE
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed mb-7 max-w-2xl">
              Uspendisse efficitur orci urna. In et augue ornare, tempor
              massa in, luctus sapien. Proin a diam et dui fermentum
              molestie vel id neque.
            </p>

            {/* Never Miss */}
            <h3 className="text-xl font-bold text-black mb-4">
              Never Miss a Deal !
            </h3>

            {/* Email Form */}
            <form className="flex w-full max-w-2xl mb-9">

              <input
                type="email"
                placeholder="Enter your email id"
                className="
                  flex-1
                  min-w-0
                  px-5
                  py-4
                  text-lg
                  text-gray-600
                  border
                  border-gray-200
                  rounded-l-full
                  outline-none
                  focus:border-primary
                "
              />

              <button
                type="submit"
                className="
                  px-7
                  py-4
                  bg-primary
                  text-white
                  font-bold
                  text-base
                  rounded-r-full
                  hover:bg-blue-700
                  transition
                  duration-300
                  whitespace-nowrap
                "
              >
                Get Promocode
              </button>

            </form>

            {/* Mobile Apps */}
            <p className="text-gray-500 text-lg mb-5">
              (Or) To Get Our Mobile Apps
            </p>

            {/* App Icons */}
            <div className="flex items-center gap-5 text-primary">

              <FaApple className="text-3xl cursor-pointer hover:scale-110 transition" />

              <FaGooglePlay className="text-3xl cursor-pointer hover:scale-110 transition" />

              <FaWindows className="text-3xl cursor-pointer hover:scale-110 transition" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PromoCode;