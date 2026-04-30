import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Blog.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "https://preview.colorlib.com/theme/content/images/slider_1.jpg",
    title: "Explore the Unseen World",
    description:
      "Experience nature like never before with our guided premium tours.",
    tag: "Adventure",
  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/content/images/slider_2.jpg",
    title: "Art of Modern Living",
    description:
      "Discover the intersection of minimalist design and high-end comfort.",
    tag: "Lifestyle",
  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/content/images/slider_3.jpg",
    title: "Culinary Masterpieces",
    description: "A journey through the finest flavors from around the globe.",
    tag: "Food & Wine",
  },
];

export default function BlogCarousel() {
  return (
    <div className="relative group w-full h-150 overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        className="h-full w-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full rounded-0">
              {/* Image with Overlay */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 scale-105 group-hover:scale-100 sliderImg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 contentContainer">
                <span className="px-3 py-1 mb-4 tracking-widest text-white uppercase bg-blue-600 rounded-full animate-bounce">
                  {slide.tag}
                </span>
                <h3 className="max-w-3xl text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h3>
                <p className="max-w-xl text-lg text-gray-200 mb-8 opacity-90">
                  {slide.description}
                </p>
                <button className="px-4 py-3 bg-white text-black font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 caraouselBtn">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="button-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronLeft size={24} />
        </button>
        <button className="button-next absolute right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronRight size={24} />
        </button>

        {/* Custom Pagination */}
        <div className="custom-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2" />
      </Swiper>

      {/* Tailwind Overrides for Swiper Pagination dots */}
      {/* <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
          background: #3b82f6;
        }
      `}</style> */}
    </div>
  );
}
