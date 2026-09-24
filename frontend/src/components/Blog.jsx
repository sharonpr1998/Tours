
import {
  FaUser,
  FaHeart,
  FaCalendarAlt,
} from "react-icons/fa";

const blogs = [
  {
    image: "/blogPic.jpg",
    category: "TRIPS",
    author: "John",
    likes: "23",
    date: "Dec 06, 2021",
    title: "Travel the Most Beautiful Places in the World",
    description:
      "Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia ipsam autem.",
  },
  {
    image: "/blogpic1.jpg",
    category: "TRAVELS",
    author: "Anton",
    likes: "24",
    date: "Dec 07, 2021",
    title: "A Place where Start New Life with Peace",
    description:
      "Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia ipsam autem.",
  },
  {
    image: "/blogPic2.jpg",
    category: "JOURNEY",
    author: "Miche",
    likes: "22",
    date: "Dec 08, 2021",
    title: "Top 10 Destinations & Adventure Trips",
    description:
      "Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia ipsam autem.",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-[#f1f4f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="great-vibes text-primary text-4xl mb-2">
            Our Blog
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black max-w-3xl mx-auto leading-tight">
            Learn more from our latest Blog Posts
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-[265px] overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Category Ribbon */}
                <div className="absolute top-0 right-0">
                  <div className="relative bg-primary text-white font-bold text-sm px-7 py-3">
                    {blog.category}

                    {/* Ribbon Arrow */}
                    <span
                      className="
                        absolute
                        left-[-14px]
                        top-0
                        border-t-[24px]
                        border-b-[24px]
                        border-r-[14px]
                        border-t-transparent
                        border-b-transparent
                        border-r-primary
                      "
                    ></span>
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                {/* Meta information */}
                <div className="flex items-center flex-wrap gap-5 text-gray-500 text-lg mb-6">

                  <div className="flex items-center gap-2">
                    <FaUser className="text-primary text-sm" />
                    <span>{blog.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaHeart className="text-primary text-sm" />
                    <span>{blog.likes}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primary text-sm" />
                    <span>{blog.date}</span>
                  </div>

                </div>

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-black
                    leading-snug
                    mb-4
                    hover:text-primary
                    transition-colors
                    duration-300
                    cursor-pointer
                  "
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-relaxed mb-7">
                  {blog.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="
                    bg-primary
                    text-white
                    font-bold
                    px-8
                    py-3
                    rounded-full
                    hover:bg-blue-700
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  Read more
                </button>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Blog;