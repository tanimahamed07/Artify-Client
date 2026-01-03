import React from "react";
import { Fade } from "react-awesome-reveal";
import { HiPlus, HiMinus } from "react-icons/hi2";

const Faq = () => {
  const faqs = [
    {
      q: "What is Artify?",
      a: "Artify is a creative artwork showcase platform where artists can upload, manage, and share their artworks while collectors can explore, like, and save favorites.",
    },
    {
      q: "Do I need an account to explore artworks?",
      a: "You can explore public artworks without an account, but liking, favoriting, and uploading artworks require logging in.",
    },
    {
      q: "Can I make my artwork private?",
      a: "Yes. Artify allows you to control artwork visibility by choosing public or private when adding or updating an artwork.",
    },
    {
      q: "How does the like and favorite system work?",
      a: "Logged-in users can like artworks to appreciate artists and add artworks to their favorites for quick access later.",
    },
    {
      q: "Is Artify free to use?",
      a: "Yes. Artify is completely free to explore, upload artworks, and engage with the community.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-base-100">
      {/* Decorative Glow */}
      <div className="absolute top-0 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <p className="text-secondary font-bold tracking-widest uppercase text-[10px]">
                Need Help?
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Questions
              </span>
            </h2>
          </div>

          <p className="text-neutral/60 max-w-xs text-sm border-l-2 border-primary pl-4 italic leading-relaxed">
            Quick answers to common questions about using Artify and its
            features.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((item, idx) => (
            <Fade key={idx} direction="up" delay={idx * 120} triggerOnce>
              <div className="relative group">
                {/* Decorative Border */}
                <div className="absolute -inset-1.5 border border-primary/20 rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                {/* Accordion */}
                <div className="relative z-10 bg-base-100 border border-base-200 rounded-xl shadow-sm overflow-hidden">
                  <details className="group/details">
                    <summary className="flex items-center justify-between cursor-pointer list-none p-6">
                      <h3 className="text-lg font-black tracking-tighter uppercase group-hover:text-primary transition-colors">
                        {item.q}
                      </h3>
                      <span className="text-primary">
                        <HiPlus className="group-open/details:hidden text-xl" />
                        <HiMinus className="hidden group-open/details:block text-xl" />
                      </span>
                    </summary>

                    <div className="px-6 pb-6 pt-2 text-sm text-neutral/60 leading-relaxed border-t border-base-200">
                      {item.a}
                    </div>
                  </details>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
