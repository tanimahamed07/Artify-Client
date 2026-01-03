import React from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ArtStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: "Creative Artworks", value: 500, suffix: "+" },
    { label: "Verified Artists", value: 120, suffix: "+" },
    { label: "Community Members", value: 15, suffix: "k" },
    { label: "Art Categories", value: 45, suffix: "" },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden bg-base-100 border-b border-base-200">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <Fade direction="up" delay={index * 150} triggerOnce key={index}>
              <div className="relative group">
                {/* Decorative Background Frame - বাঁকানো কমিয়ে -rotate-1 করা হয়েছে */}
                <div className="absolute -inset-1 border border-primary/20 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Stat Card */}
                <div className="relative z-10 p-8 text-center bg-base-100/60 backdrop-blur-sm rounded-2xl border border-base-200 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative inline-block">
                    {/* Number with Gradient */}
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-secondary leading-none">
                      {inView ? (
                        <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                      ) : (
                        "0"
                      )}
                    </h2>
                    {/* Pulse dot */}
                    <span className="absolute -top-1 -right-4 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-neutral/60 border-t border-dashed border-base-300 pt-4 mt-2 group-hover:text-primary transition-colors">
                    {stat.label}
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

export default ArtStats;