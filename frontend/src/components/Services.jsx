
import {
  FaPaw,
  FaHiking,
  FaCommentDots,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPaw />,
    title: "Wildlife Tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?",
  },
  {
    icon: <FaHiking />,
    title: "Adventure Tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?",
  },
  {
    icon: <FaCommentDots />,
    title: "Trip Planing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum perspiciatis?",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="great-vibes text-primary text-4xl mb-2">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black max-w-2xl mx-auto leading-tight">
            Our Amazing Services for your Travel
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                min-h-[340px]
                flex flex-col
                items-center
                justify-center
                text-center
                px-10
                py-12
                rounded-lg

                bg-[#f1f4f7]
                border border-transparent

                transition-all
                duration-300

                hover:bg-white
                hover:border-gray-200
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Icon */}
              <div
                className="
                  w-20 h-20
                  rounded-full
                  bg-primary
                  text-white
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-5">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;