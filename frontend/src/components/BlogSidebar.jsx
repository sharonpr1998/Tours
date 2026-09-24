

const BlogSidebar = () => {
  const categories = [
    { name: "Travel Direction", count: 4 },
    { name: "Destinations", count: 8 },
    { name: "Tour Trips", count: 8 },
    { name: "Trips", count: 3 },
  ];

  const recentPosts = [
    {
      image: "/blog1.jpg",
      title: "Sed do eiusmod tempor ut",
      date: "Feb 11, 2021",
    },
    {
      image: "/blog2.jpg",
      title: "Et dolore magna aliqua",
      date: "Feb 22, 2021",
    },
    {
      image: "/blog3.jpg",
      title: "Travel the Most Beautiful Places",
      date: "Mar 05, 2021",
    },
  ];

  const tags = [
    "Travel",
    "Packages",
    "Tours",
    "Trip",
    "Beautiful",
    "World",
    "Destination",
    "Places",
    "Adventure",
  ];

  return (
    <aside>

      {/* Categories */}

      <div className="mb-14">

        <h3 className="text-2xl font-bold mb-6">
          Categories
        </h3>

        <div>

          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <span className="text-lg">
                {category.name}
              </span>

              <span className="bg-primary text-white px-3 py-1 rounded-md font-semibold">
                {category.count}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Recent Posts */}

      <div className="mb-14">

        <h3 className="text-2xl font-bold mb-7">
          Recent Posts
        </h3>

        <div className="space-y-6">

          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex gap-4"
            >

              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div>

                <h4 className="font-bold text-lg leading-snug mb-2">
                  {post.title}
                </h4>

                <p className="text-gray-500">
                  {post.date}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Tags */}

      <div>

        <h3 className="text-2xl font-bold mb-7">
          Tags
        </h3>

        <div className="flex flex-wrap gap-3">

          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#f1f4f7] px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition cursor-pointer"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </aside>
  );
};

export default BlogSidebar;