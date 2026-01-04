import React from "react";
import { Fade } from "react-awesome-reveal";
import { HiArrowRight, HiPlus } from "react-icons/hi2";
import { Link } from "react-router";

const Call2Actions = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-base-100">
      {/* Decorative Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-24 w-64 h-64 bg-secondary/15 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <Fade triggerOnce>
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute -inset-2 border border-primary/20 rounded-3xl -rotate-1"></div>

            {/* Main CTA Box */}
            <div className="relative z-10 bg-base-100 border border-base-200 rounded-3xl px-8 py-16 md:px-16 text-center shadow-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-primary font-bold tracking-widest uppercase text-[10px]">
                  Join The Movement
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">
                Ready to Share Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Creative Vision?
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-2xl mx-auto text-neutral/60 text-sm md:text-base leading-relaxed mb-10">
                Become part of Artify’s growing creative community. Upload your
                artworks, gain appreciation through likes, and explore inspiring
                creations from talented artists around the world.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Primary CTA */}
                <Link to='/dashboard/add-artworks' className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg hover:scale-105 transition-transform">
                  <HiPlus className="text-lg" />
                  Add Artwork
                </Link>

                {/* Secondary CTA */}
                <Link to='/dashboard/my-gallery' className="group flex items-center gap-2 bg-base-200 hover:bg-secondary hover:text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all">
                  Explore Gallery
                  <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Call2Actions;
