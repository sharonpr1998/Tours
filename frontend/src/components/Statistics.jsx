
import {
  FaRoute,
  FaSmile,
  FaMedal,
  FaUmbrellaBeach,
} from "react-icons/fa";

const statistics = [
  {
    icon: <FaRoute />,
    number: "200+",
    title: "Total Destinations",
  },
  {
    icon: <FaSmile />,
    number: "100+",
    title: "Happy People",
  },
  {
    icon: <FaMedal />,
    number: "30+",
    title: "Awards Won",
  },
  {
    icon: <FaUmbrellaBeach />,
    number: "130+",
    title: "Stunning Places",
  },
];

const Statistics = () => {
  return (
    <section className="relative py-24 bg-[#10264d] overflow-hidden">

      {/* Dotted World Map Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/world-map-dots.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="great-vibes text-primary text-4xl mb-2">
            Statistics
          </p>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            We have over 10 years Experience
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {statistics.map((item, index) => (
            <div
              key={index}
              className="text-center text-white"
            >
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-white/15 flex items-center justify-center text-4xl">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-5xl font-bold mb-3">
                {item.number}
              </h3>

              {/* Title */}
              <p className="text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Statistics;