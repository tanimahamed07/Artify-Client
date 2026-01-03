import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";

const CommunityHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Floating Flora",
      artist: "Mahi",
      category: "Acrylic",
      likes: 46,
      image:
        "https://www.rileystreet.com/cdn/shop/articles/shutterstock_410271079_1024x1024.jpg?v=1624398205",
    },
    {
      id: 2,
      title: "Twin Blooms",
      artist: "Sadiya Islam",
      category: "Watercolor",
      likes: 32,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFrrROFtBGKe0EaqzUk58uoEx54MXg3KDYJy6sIf1_32w8035RMRxDuPyhtEHneAOsIo&usqp=CAU",
    },
    {
      id: 3,
      title: "Enchanted Forest",
      artist: "Eva Ahamed",
      category: "Watercolor",
      likes: 58,
      image:
        "https://i.pinimg.com/736x/8e/68/7a/8e687a252e5607f593b4d57665b3d69a.jpg",
    },
    {
      id: 4,
      title: "Enchanted River",
      artist: "Tanim Ahamed",
      category: "Watercolor",
      likes: 58,
      image:
        "https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/582082594_5146245042267829_2082865488661602842_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFFhTNVOFrdOV0uptGPZb4gCRk3aEbdTnMJGTdoRt1OcyLoiRWWQimhCHVBIJNvIP1DtCA-APbiVgeollRXv2zs&_nc_ohc=GXpfc10mONsQ7kNvwHGah_u&_nc_oc=AdkknS-jSv_2cHyz6TnWrt8axcUPYki-7UAEqJ0a3PwxW8Ja_K0QS9L3mlvvz96W2iY&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=ataSkGAHGfghXz5FxDEyfQ&oh=00_AfqmLkAR3TNG5fwj5OiUrZAvTew44-pRxS6UmtOjE9S1qQ&oe=695E9ED3",
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Decorative Glow (Banner Style) */}
      <div className="absolute top-1/2 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
              Trending Now
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Trending{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Artworks
            </span>
          </h2>
        </div>
        <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic">
          Discover what's trending in our creative community right now.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <Fade key={item.id} direction="up" delay={index * 200} triggerOnce>
            <div className="relative group">
              {/* Decorative Frame (Matches Banner & ArtsCard) */}
              <div className="absolute -inset-1.5 border border-secondary/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Main Card */}
              <div className="relative z-10 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-base-100/90 backdrop-blur-md rounded-lg border border-base-300">
                    <p className="text-[10px] font-black uppercase tracking-tighter text-secondary">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral/60 mb-4 italic">
                    By{" "}
                    <span className="font-semibold text-neutral">
                      {item.artist}
                    </span>
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-base-200">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-secondary/10 rounded-full text-secondary">
                        <BiSolidLike size={18} />
                      </div>
                      <span className="font-bold text-lg tracking-tighter">
                        {item.likes}{" "}
                        <span className="text-[10px] text-neutral/40 uppercase">
                          Votes
                        </span>
                      </span>
                    </div>

                    <button className="btn btn-primary btn-sm rounded-lg shadow-lg hover:scale-105 transition-transform px-5">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default CommunityHighlights;
