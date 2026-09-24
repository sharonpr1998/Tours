import  { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John wilson",
    subtitle: "Subtitle",
    image: "/testimonial1.jpg",
    title: "Pellen tesque libero ut justo",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere, tesque libero ut justo Semper.",
  },
  {
    name: "Julia sakura",
    subtitle: "Subtitle",
    image: "/testimonial2.jpg",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere, tesque libero ut justo Semper.",
  },
  {
    name: "Michael john",
    subtitle: "Subtitle",
    image: "/testimonial3.jpg",
    title: "Travel makes life beautiful",
    text: "Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in faucibus orci luctus et ultrices posuere, tesque libero ut justo Semper.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const gap = 48;

  // 3 copies for infinite loop
  const infiniteTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // ==============================
  // GET CONTAINER WIDTH
  // ==============================

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // ==============================
  // AUTO SLIDE
  // ==============================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ==============================
  // CARD WIDTH
  // ==============================

  const isDesktop = containerWidth >= 1024;

  const visibleCards = isDesktop ? 2 : 1;

  const cardWidth =
    visibleCards === 2
      ? (containerWidth - gap) / 2
      : containerWidth;

  const moveDistance = cardWidth + gap;

  const translateX = -(currentIndex * moveDistance);

  // ==============================
  // INFINITE RESET
  // ==============================

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length) {
      setIsTransitioning(false);

      setCurrentIndex(0);

      // Enable animation again
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  // ==============================
  // DOT
  // ==============================

  const activeDot = currentIndex % testimonials.length;

  return (
    <section className="py-20 bg-[#f1f4f7] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">

          <p className="great-vibes text-primary text-4xl mb-2">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Happy With Customers & Clients
          </h2>

        </div>


        {/* ================= CAROUSEL ================= */}

        <div
          ref={containerRef}
          className="w-full overflow-hidden"
        >

          <div
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              gap: `${gap}px`,

              transform: `translate3d(${translateX}px, 0, 0)`,

              transition: isTransitioning
                ? "transform 900ms ease-in-out"
                : "none",

              willChange: "transform",
            }}
          >

            {infiniteTestimonials.map((testimonial, index) => (

              <div
                key={index}
                className="shrink-0"
                style={{
                  width: `${cardWidth}px`,
                }}
              >

                {/* ================= WHITE TESTIMONIAL BOX ================= */}

                <div className="bg-white rounded-lg p-8 min-h-[200px]">

                  <div className="flex items-start gap-3 mb-5">

                    <FaQuoteLeft
                      className="
                        text-primary
                        text-4xl
                        shrink-0
                      "
                    />

                    <h3 className="text-2xl font-bold text-black">
                      {testimonial.title}
                    </h3>

                  </div>

                  <p className="text-gray-500 text-lg leading-relaxed">
                    {testimonial.text}
                  </p>

                </div>


                {/* ================= USER ================= */}

                <div className="flex items-center gap-5 mt-6">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="
                      w-20
                      h-20
                      rounded-full
                      object-cover
                    "
                  />

                  <div>

                    <h3 className="text-xl font-bold text-black">
                      {testimonial.name}
                    </h3>

                    <p className="text-gray-400 text-lg">
                      {testimonial.subtitle}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= DOTS ================= */}

        <div className="flex justify-center items-center gap-3 mt-14">

          {[0, 1, 2].map((dot) => (

            <button
              key={dot}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(dot);
              }}
              className={`
                w-3
                h-3
                rounded-full
                transition-all
                duration-300
                ${
                  activeDot === dot
                    ? "bg-primary"
                    : "bg-black"
                }
              `}
              aria-label={`Show testimonial ${dot + 1}`}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;