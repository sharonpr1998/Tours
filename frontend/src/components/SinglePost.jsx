
import {
  FaUser,
  FaHeart,
  FaCalendarAlt,
} from "react-icons/fa";

const SinglePost = ({ post }) => {
  return (
    
    <article className="bg-white shadow-sm">

      <div className="relative h-[500px] overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 right-0 bg-primary text-white px-8 py-3 font-bold">
          {post.category}
        </div>

      </div>

      <div className="p-8">

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

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          {post.title}
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          {post.description}
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          {post.content}
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          Travelling is not only about reaching a destination.
          It is also about enjoying the journey, discovering
          something new and spending time with the people we love.
        </p>

        <p className="text-gray-600 text-lg leading-8">
          So pack your bags, choose your destination and start
          your next beautiful journey.
        </p>

      </div>

    </article>
  );
};

export default SinglePost;