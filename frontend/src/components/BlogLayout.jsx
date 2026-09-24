
import { FaUser, FaHeart, FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import BlogSidebar from "./BlogSidebar";

const posts = [
  {
    id: 1,
    image: "/blog1.jpg",
    category: "TRIPS",
    author: "John",
    likes: "23",
    date: "Dec 06, 2021",
    title: "Travel the Most Beautiful Places in the World",
    description:
      "Discover beautiful destinations, amazing landscapes and unforgettable travel experiences around the world.",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    category: "TRAVELS",
    author: "John",
    likes: "18",
    date: "Dec 12, 2021",
    title: "A Place where Start New Life with Peace",
    description:
      "Explore peaceful places where you can relax, enjoy nature and start a wonderful new journey.",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    category: "JOURNEY",
    author: "John",
    likes: "31",
    date: "Dec 18, 2021",
    title: "Top Destinations for Your Next Adventure",
    description:
      "Plan your next adventure with our list of amazing destinations filled with beautiful views and exciting experiences.",
  },
  {
    id: 4,
    image: "/blog4.jpg",
    category: "ADVENTURE",
    author: "John",
    likes: "27",
    date: "Dec 24, 2021",
    title: "Explore the World and Make Memories",
    description:
      "Travel to new places, meet new people and create memories that you will remember for a lifetime.",
  },
];

const BlogLayout = ({ sidebar = "right" }) => {
  const PostCard = ({ post }) => {
    return (
      <article className="bg-white shadow-sm mb-12">

        {/* Image */}

        <NavLink to={`/blog/post/${post.id}`}>
          <div className="relative h-[500px] overflow-hidden">

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />

            <div className="absolute top-0 right-0 bg-primary text-white px-8 py-3 font-bold">
              {post.category}
            </div>

          </div>
        </NavLink>

        <div className="p-8">

          {/* Details */}

          <div className="flex flex-wrap items-center gap-6 text-primary mb-6">

            <div className="flex items-center gap-2">
              <FaUser />
              <span className="text-gray-600">
                {post.author}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaHeart />
              <span className="text-gray-600">
                {post.likes}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span className="text-gray-600">
                {post.date}
              </span>
            </div>

          </div>

          {/* Title */}

          <NavLink to={`/blog/post/${post.id}`}>
            <h2 className="text-3xl font-bold text-black mb-4 hover:text-primary transition">
              {post.title}
            </h2>
          </NavLink>

          <p className="text-gray-500 text-lg leading-relaxed mb-7">
            {post.description}
          </p>

          {/* Read More */}

          <NavLink
            to={`/blog/post/${post.id}`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          >
            Read more
          </NavLink>

        </div>

      </article>
    );
  };

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {sidebar === "right" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">

              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))}

            </div>

            <div>
              <BlogSidebar />
            </div>

          </div>
        )}

        {sidebar === "left" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div>
              <BlogSidebar />
            </div>

            <div className="lg:col-span-2">

              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))}

            </div>

          </div>
        )}

        {sidebar === "none" && (
          <div className="max-w-4xl mx-auto">

            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>
        )}

      </div>

    </section>
  );
};

export default BlogLayout;