import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "slide1.jpg",
    title: "Live your Adventure",
    description: "Take advantage of this amazing exclusive offers.",
  },
  {
    image: "slide2.jpg",
    title: "Explore the World",
    description: "Discover beautiful places and unforgettable moments.",
  },
  {
    image: "slide3.jpg",
    title: "Travel With Us",
    description: "Make your next journey truly special.",
  },
  {
    image: "slide4.jpg",
    title: "Create Memories",
    description: "Your adventure starts here.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Previous
  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Next
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-10">
        <div className="max-w-xl">

          <h1 className=' great-vibes text-6xl text-black'>
            {slides[current].title}
          </h1>

          <p className="text-xl mt-3 text-black">
            {slides[current].description}
          </p>

          <button className="mt-8 bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
            Explore More
          </button>

        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full bg-primary text-white
                   flex items-center justify-center
                   hover:scale-110 transition z-20"
      >
        <FaArrowLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full bg-primary text-white
                   flex items-center justify-center
                   hover:scale-110 transition z-20"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "w-8 bg-primary"
                : "w-3 bg-white"
            }`}
          />
        ))}

      </div>

      {/* Counter */}
      <div className="absolute bottom-6 right-10 bg-black/50 text-white px-4 py-2 rounded z-20">
        {current + 1} / {slides.length}
      </div>

    </section>
  );
};

export default Hero;