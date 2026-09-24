import { useParams } from "react-router";

import BlogSidebar from "../components/BlogSidebar";
import SinglePost from "../components/SinglePost";

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
    content:
      "Travel gives us the opportunity to discover new places, experience different cultures and create unforgettable memories.",
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
    content:
      "Sometimes travelling to a peaceful place is all we need to refresh our mind. Beautiful nature and calm surroundings can make every journey special.",
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
    content:
      "Adventure travel allows us to step outside our comfort zone. Exploring new destinations and experiencing nature can make your journey unforgettable.",
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
    content:
      "Every journey gives us a new story to tell. Exploring different places and meeting new people helps us create memories that stay with us forever.",
  },
];

const BlogSingle = ({ sidebar = "right" }) => {
  const { id } = useParams();

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-4xl font-bold">Blog not found</h1>
      </section>
    );
  }

  return (
    <>
      <section
        className="relative h-[320px] bg-cover"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div>
            <h1 className="great-vibes text-5xl md:text-6xl text-black mb-4">
              About Us
            </h1>

            <div className="flex items-center gap-3 text-lg font-semibold text-black">
              <span>Home</span>

              <span className="text-primary text-2xl">›</span>

              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {sidebar === "right" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <SinglePost post={post} />
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
                <SinglePost post={post} />
              </div>
            </div>
          )}

          {sidebar === "none" && (
            <div className="max-w-4xl mx-auto">
              <SinglePost post={post} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
