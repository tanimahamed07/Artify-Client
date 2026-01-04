import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  HiSparkles,
  HiUserGroup,
  HiHeart,
  HiShieldCheck,
} from "react-icons/hi2";

const WhyUChoseUs = () => {
  const features = [
    {
      id: 1,
      title: "Showcase Your Creativity",
      desc: "Upload and present your artworks in a clean, modern gallery designed to highlight your creative identity.",
      icon: <HiSparkles />,
    },
    {
      id: 2,
      title: "Growing Artist Community",
      desc: "Connect with fellow artists and collectors, explore galleries, and grow together through appreciation.",
      icon: <HiUserGroup />,
    },
    {
      id: 3,
      title: "Likes & Favorites System",
      desc: "Receive love for your work through likes and let collectors save their favorite creations.",
      icon: <HiHeart />,
    },
    {
      id: 4,
      title: "Secure & Private Galleries",
      desc: "Control artwork visibility with public and private options, backed by secure authentication.",
      icon: <HiShieldCheck />,
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-base-100">
      {/* Decorative Glow */}
      <div className="absolute top-0 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                Why Artify
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              Why You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Choose Us
              </span>
            </h2>
          </div>

          <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-secondary pl-4 italic">
            Artify is built to empower artists and collectors with a seamless,
            engaging, and secure creative experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <Fade key={item.id} direction="up" delay={idx * 150} triggerOnce>
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-1.5 border border-primary/20 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Card */}
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-2xl mb-6">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUChoseUs;
