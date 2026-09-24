

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="great-vibes text-primary text-4xl mb-2">
            Send your Queries
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Drop Us A Line
          </h2>

        </div>

        {/* Form */}

        <form className="space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Name"
              className="
                w-full
                h-16
                px-7
                bg-[#f1f4f7]
                rounded-lg
                outline-none
                text-lg
                text-gray-700
                placeholder:text-gray-500
                focus:ring-2
                focus:ring-primary
              "
            />

            <input
              type="tel"
              placeholder="Your phone number"
              className="
                w-full
                h-16
                px-7
                bg-[#f1f4f7]
                rounded-lg
                outline-none
                text-lg
                text-gray-700
                placeholder:text-gray-500
                focus:ring-2
                focus:ring-primary
              "
            />

            <input
              type="email"
              placeholder="Email*"
              required
              className="
                w-full
                h-16
                px-7
                bg-[#f1f4f7]
                rounded-lg
                outline-none
                text-lg
                text-gray-700
                placeholder:text-gray-500
                focus:ring-2
                focus:ring-primary
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
                w-full
                h-16
                px-7
                bg-[#f1f4f7]
                rounded-lg
                outline-none
                text-lg
                text-gray-700
                placeholder:text-gray-500
                focus:ring-2
                focus:ring-primary
              "
            />

          </div>

          <textarea
            placeholder="Message*"
            required
            rows="6"
            className="
              w-full
              px-7
              py-5
              bg-[#f1f4f7]
              rounded-lg
              outline-none
              resize-none
              text-lg
              text-gray-700
              placeholder:text-gray-500
              focus:ring-2
              focus:ring-primary
            "
          ></textarea>

          {/* Submit */}

          <div className="flex justify-end pt-4">

            <button
              type="submit"
              className="
                bg-primary
                text-white
                px-10
                py-4
                rounded-full
                font-bold
                text-lg
                hover:bg-blue-700
                transition
              "
            >
              Submit Now
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;