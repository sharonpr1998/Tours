
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    image: "/agent1.jpg",
    name: "Lern Victor",
  },
  {
    image: "/agent2.jpg",
    name: "Meyer Lson",
  },
  {
    image: "/agent3.jpg",
    name: "Ali Meyer",
  },
  {
    image: "/agent4.jpg",
    name: "Sam Mills",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="great-vibes text-primary text-4xl mb-2">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Meet our Tours Agents
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                bg-[#f1f4f7]
                rounded-lg
                overflow-hidden
                text-center
                group
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Image */}
              <div className="w-full h-[380px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Name */}
              <div className="py-5">

                <h3 className="text-xl font-bold text-black mb-4">
                  {member.name}
                </h3>

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-3">

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="#"
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-primary
                      text-white
                      flex
                      items-center
                      justify-center
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <FaLinkedinIn />
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;