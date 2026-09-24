import Features from "../components/Features";
import PromoCode from "../components/PromoCode";
import Statistics from "../components/Statistics";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
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

              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="w-full h-[500px]">
              <img
                src="/about1.jpg"
                alt="Travel adventure"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* Small Heading */}
              <p className="great-vibes text-primary text-4xl mb-2">About Us</p>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                World Best Travel Agency
              </h2>

              {/* Paragraph 1 */}
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Aptent taciti sociosqu ad litora conubia nostra, per inceptos
                himenaeos. Aenean volutpat elementum ante, id eleifend eros
                luctus sit.
              </p>

              {/* Paragraph 2 */}
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Aenean volutpat elementum ante, id eleifend eros luctus sit
                amet. Eel lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>

              {/* Paragraph 3 */}
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatem. Travel with us and discover beautiful
                places around the world.
              </p>

              {/* Explore Button */}
              <button
                type="button"
                className="
            bg-primary
            text-white
            px-8
            py-3
            rounded-full
            font-bold
            text-lg
            hover:bg-blue-700
            hover:-translate-y-1
            transition-all
            duration-300
          "
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Statistics />
      <Team />
      <Features />
      <Testimonials />
      <PromoCode />
    </>
  );
};

export default AboutPage;
