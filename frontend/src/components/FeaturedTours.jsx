import { useEffect, useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

// ================= TOUR DATA =================

const tours = [
  {
    image: "/tour1.jpg",
    rating: "4.07",
    title: "Discovery Best Tours",
    location: "Central Park West NY, USA",
    price: "39.00",
    days: "10 Days",
  },
  {
    image: "/tour2.jpg",
    rating: "4.05",
    title: "Dubai – Stunning Places",
    location: "5th Avenue, London",
    price: "69.00",
    days: "15 Days",
  },
  {
    image: "/tour3.jpg",
    rating: "4.07",
    title: "Enquiry Form Only – Italy",
    location: "Henley Street, Italy",
    price: "39.00",
    days: "6 Days",
  },
  {
    image: "/tour4.jpg",
    rating: "4.08",
    title: "Switzerland – Best Zurich",
    location: "Zermatt, Switzerland",
    price: "49.00",
    days: "7 Days",
  },
  {
    image: "/tour5.jpg",
    rating: "4.09",
    title: "Amazing Travel Experience",
    location: "Paris, France",
    price: "59.00",
    days: "8 Days",
  },
  {
    image: "/tour6.jpg",
    rating: "4.10",
    title: "Beautiful Bali Tour",
    location: "Bali, Indonesia",
    price: "79.00",
    days: "12 Days",
  },
];

// ================= TOUR CARD =================

const TourCard = ({ tour }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">

      {/* IMAGE */}
      <div className="h-[245px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          draggable="false"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* RATING */}
        <div className="flex items-center gap-1 mb-4">
          {[1, 2, 3, 4].map((star) => (
            <FaStar
              key={star}
              className="text-orange-400 text-sm"
            />
          ))}

          <FaStar className="text-orange-200 text-sm" />

          <span className="text-gray-500 ml-2">
            {tour.rating}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold hover:text-primary transition">
          {tour.title}
        </h3>

        {/* LOCATION */}
        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <FaMapMarkerAlt className="text-primary shrink-0" />

          <span>{tour.location}</span>
        </div>

        {/* PRICE */}
        <div className="mt-5">
          <span className="text-gray-500 text-lg">
            From
          </span>

          <span className="text-primary text-2xl font-bold ml-2">
            ${tour.price}
          </span>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between mt-8">

          {/* DAYS */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaClock className="text-primary" />

            <span>{tour.days}</span>
          </div>

          {/* EXPLORE */}
          <button
            type="button"
            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Explore

            <FaArrowRight />
          </button>

        </div>

      </div>
    </div>
  );
};

// ================= MAIN COMPONENT =================

const FeaturedTours = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(4);

  const [isTransitioning, setIsTransitioning] = useState(true);

  // ================= RESPONSIVE CARD COUNT =================

  useEffect(() => {
    const updateVisibleCards = () => {

      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } 
      else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } 
      else {
        setVisibleCards(4);
      }

    };

    updateVisibleCards();

    window.addEventListener(
      "resize",
      updateVisibleCards
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
    };

  }, []);

  // ================= DUPLICATE DATA =================

  const infiniteTours = [
    ...tours,
    ...tours,
  ];

  // ================= AUTO SLIDE =================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentIndex((prev) => prev + 1);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  // ================= INFINITE RESET =================

  useEffect(() => {

    // After reaching the duplicate section
    if (currentIndex >= tours.length) {

      const timer = setTimeout(() => {

        // Remove animation temporarily
        setIsTransitioning(false);

        // Go back to first set
        setCurrentIndex(0);

        // Enable animation again
        requestAnimationFrame(() => {

          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });

        });

      }, 800);

      return () => clearTimeout(timer);
    }

  }, [currentIndex]);

  // ================= CARD WIDTH =================

  const cardGap = 20;

  const cardWidth = `
    calc(
      (100% - ${(visibleCards - 1) * cardGap}px)
      / ${visibleCards}
    )
  `;

  // ================= TRANSLATION =================

  const translateX = `
    calc(
      -${currentIndex} *
      (
        (100% - ${(visibleCards - 1) * cardGap}px)
        / ${visibleCards}
        + ${cardGap}px
      )
    )
  `;

  // ================= DOT =================

  const activeDot =
    currentIndex % tours.length < 3
      ? 0
      : 1;

  return (
    <section className="py-20 bg-white overflow-hidden">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-12 px-4">

        <p className="great-vibes text-4xl text-primary">
          Featured tours
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
          Most Popular Tours
        </h2>

      </div>

      {/* ================= CAROUSEL ================= */}

      <div className="w-full overflow-hidden px-4">

        <div
          className="flex"
          style={{
            gap: `${cardGap}px`,

            transform: `translateX(${translateX})`,

            transition: isTransitioning
              ? "transform 800ms ease-in-out"
              : "none",

            willChange: "transform",
          }}
        >

          {infiniteTours.map((tour, index) => (

            <div
              key={index}
              className="shrink-0"
              style={{
                width: cardWidth,
              }}
            >
              <TourCard tour={tour} />
            </div>

          ))}

        </div>

      </div>

      {/* ================= DOTS ================= */}

      <div className="flex justify-center items-center gap-3 mt-10">

        <span
          className={`
            w-3
            h-3
            rounded-full
            transition-all
            duration-500
            ${
              activeDot === 0
                ? "bg-primary"
                : "bg-gray-300"
            }
          `}
        />

        <span
          className={`
            w-3
            h-3
            rounded-full
            transition-all
            duration-500
            ${
              activeDot === 1
                ? "bg-primary"
                : "bg-gray-300"
            }
          `}
        />

      </div>

    </section>
  );
};

export default FeaturedTours;