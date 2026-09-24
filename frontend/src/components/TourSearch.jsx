// import { FaRegCalendar } from "react-icons/fa";


const TourSearch = () => {
  return (
    <section className="relative my-20 z-20 ">
      <div className="max-w-6xl mx-auto bg-white shadow-lg px-14 py-12">

        <div className="grid grid-cols-5 gap-6 items-end">

          {/* Date */}
          <div>
            <label className="block text-lg font-bold mb-3">
              Date from:
            </label>

            <div className="h-14 bg-gray-100 rounded-full flex items-center px-5">
              <input
                type="date"
                className="bg-transparent outline-none w-full text-lg"
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-lg font-bold mb-3">
              Destinations:
            </label>

            <select className="w-full h-14 bg-gray-100 rounded-full px-5 text-lg outline-none">
              <option>Select Location</option>
              <option>India</option>
              <option>Dubai</option>
              <option>Paris</option>
              <option>London</option>
            </select>
          </div>

          {/* Activity */}
          <div>
            <label className="block text-lg font-bold mb-3">
              Activity:
            </label>

            <select className="w-full h-14 bg-gray-100 rounded-full px-5 text-lg outline-none">
              <option>Select Any</option>
              <option>Adventure</option>
              <option>Beach</option>
              <option>Hiking</option>
              <option>Camping</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-lg font-bold mb-3">
              Guests:
            </label>

            <input
              type="number"
              min="0"
              defaultValue="0"
              className="w-full h-14 bg-gray-100 rounded-full px-5 text-lg outline-none"
            />
          </div>

          {/* Button */}
          <button className="h-14 bg-primary text-white rounded-full text-lg font-bold hover:opacity-90 transition">
            Find Tour
          </button>

        </div>
      </div>
    </section>
  );
};

export default TourSearch;