

const destinations = [
  {
    image: "/destination1.jpg",
    title: "Barcelona",
    tours: "3 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
  {
    image: "/destination2.jpg",
    title: "Singapore",
    tours: "4 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
  {
    image: "/destination3.jpg",
    title: "Venice",
    tours: "5 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
  {
    image: "/destination4.jpg",
    title: "Amazing Places",
    tours: "6 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
  {
    image: "/destination5.jpg",
    title: "New York",
    tours: "2 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
  {
    image: "/destination6.jpg",
    title: "London",
    tours: "8 TOURS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consectetur.",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-[#f1f4f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">

          <p className="great-vibes text-primary text-4xl mb-2">
            Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Go Awesome Places
          </h2>

        </div>


        {/* ================= DESTINATION GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {destinations.map((destination, index) => (

            <div
              key={index}
              className="
                relative
                h-[260px]
                rounded-lg
                overflow-hidden
                group
                cursor-pointer
              "
            >

              {/* ================= IMAGE ================= */}

              <img
                src={destination.image}
                alt={destination.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-150
                  ease-out
                  group-hover:scale-105
                "
              />


              {/* ================= RED OVERLAY ================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-red-500/85
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-150
                  ease-out
                "
              ></div>


              {/* ================= HOVER CONTENT ================= */}

              <div
                className="
                  absolute
                  inset-0
                  z-10
                  flex
                  flex-col
                  justify-center
                  px-8
                  text-white
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-150
                  ease-out
                  translate-y-2
                  group-hover:translate-y-0
                "
              >

                <h3 className="text-2xl font-bold mb-4">
                  {destination.title}
                </h3>

                <p className="text-lg leading-relaxed max-w-md">
                  {destination.description}
                </p>

              </div>


              {/* ================= TOUR COUNT ================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  bg-primary
                  text-white
                  px-4
                  py-4
                  font-medium
                  text-base
                  opacity-100
                  group-hover:opacity-0
                  transition-opacity
                  duration-150
                  ease-out
                "
              >
                {destination.tours}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Destinations;