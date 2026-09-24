
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-[calc(100vh-96px)] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/error.jpg')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] flex items-center">

        <div className="w-full max-w-xl text-white">

          <h1 className="text-8xl md:text-9xl font-bold mb-4">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Something's Missing
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-8">
            The page you are looking for was moved, removed,
            renamed or never existed.
          </p>

          {/* Search */}

          <div className="flex w-full max-w-lg h-16 mb-8">

            <input
              type="text"
              placeholder="Search"
              className="
                flex-1
                px-5
                text-gray-700
                bg-white
                rounded-l-full
                outline-none
                text-lg
              "
            />

            <button
              type="button"
              className="
                w-16
                bg-primary
                text-white
                rounded-r-full
                flex
                items-center
                justify-center
                text-xl
                hover:bg-blue-700
                transition
              "
            >
              <FaSearch />
            </button>

          </div>

          {/* Back Home */}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-3
              text-lg
              font-bold
              hover:text-primary
              transition
            "
          >
            <FaArrowLeft />
            Go back to Home
          </button>

        </div>

      </div>

    </section>
  );
};

export default ErrorPage;