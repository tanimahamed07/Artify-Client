import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Digital Artist",
      rating: 5,
      review: "Artify has transformed how I showcase my work. The clean, modern interface lets my art speak for itself, and connecting with other artists has been incredibly inspiring!",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Photographer",
      rating: 5,
      review: "Finally, a platform that understands artists! Uploading and organizing my gallery was effortless, and the favorites feature helps me discover amazing new pieces every day.",
      avatar: "https://i.pravatar.cc/150?u=james",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Illustrator",
      rating: 5,
      review: "The community on Artify is so supportive. Getting likes and feedback on my artworks motivates me to create more. The UI is beautiful and intuitive – highly recommend!",
      avatar: "https://i.pravatar.cc/150?u=elena",
    },
    {
      id: 4,
      name: "Marcus Okonkwo",
      role: "Sculptor",
      rating: 4,
      review: "Artify makes sharing my sculptures easy with great detail views. The private/public visibility option is perfect for controlling what I share. A must-have for any artist.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-base-100">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                Artist Voices
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              What Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Artists Say
              </span>
            </h2>
          </div>
          <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic leading-relaxed">
            Real feedback from creative minds who bring their art to life on Artify.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20 review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="py-8">
              <div className="relative group h-full">
                {/* Decorative Tilted Frame - বাঁকানো কমানো হয়েছে (-rotate-1) */}
                <div className="absolute -inset-1 border border-primary/10 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Main Card */}
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col">
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        size={14} 
                        className={i < review.rating ? "text-secondary" : "text-base-300"}
                      />
                    ))}
                  </div>

                  <FaQuoteLeft className="text-primary/10 text-5xl absolute top-6 right-8" />

                  <p className="text-neutral/80 mb-8 italic leading-relaxed relative z-10 flex-grow text-sm">
                    "{review.review}"
                  </p>

                  {/* Artist Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-dashed border-base-300">
                    <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-base-200 group-hover:ring-primary/20 transition-all duration-500">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-md font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-none mb-1">
                        {review.name}
                      </h4>
                      <p className="text-[9px] font-bold text-primary/70 tracking-widest uppercase">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .review-swiper .swiper-pagination-bullet-active {
          background: #570df8 !important; 
          width: 20px;
          border-radius: 10px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
};

export default UserReview;