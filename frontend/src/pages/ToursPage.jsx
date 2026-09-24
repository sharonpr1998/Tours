import Destinations from "../components/Destinations"
import FeaturedTours from "../components/FeaturedTours"
import PromoCode from "../components/PromoCode"


function ToursPage() {
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

              <span>Tours</span>
            </div>
          </div>
        </div>
      </section>   

      <FeaturedTours/> 
      <Destinations/>
      <PromoCode/>
    </>
  )
}

export default ToursPage
