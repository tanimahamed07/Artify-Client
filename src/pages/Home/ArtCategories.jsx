import React from "react";
import { Fade } from "react-awesome-reveal";

const ArtCategories = () => {
  const categories = [
    {
      name: "Oil Painting",
      img: "https://i.ibb.co/vz6V0S8/oil.jpg",
      count: "120 Items",
    },
    {
      name: "Digital Art",
      img: "https://i.ibb.co/L8N7M9S/digital.jpg",
      count: "85 Items",
    },
    {
      name: "Watercolor",
      img: "https://i.ibb.co/M9K4vS6/water.jpg",
      count: "64 Items",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Fade key={idx} direction="left" delay={idx * 100} triggerOnce>
            <div className="relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold">{cat.name}</h3>
                <p>{cat.count}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default ArtCategories;
