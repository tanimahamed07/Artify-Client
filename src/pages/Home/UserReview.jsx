import React from "react";
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-200 rounded-2xl px-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Collectors Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Fade direction="left" triggerOnce>
          <div className="bg-base-100 p-6 rounded-lg shadow-md border-l-4 border-primary">
            <p className="italic text-gray-600 mb-4">"Artify is the best place to discover hidden talents. I bought three amazing digital arts last month!"</p>
            <div className="font-bold">- Sarah Kerrie</div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="bg-base-100 p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <p className="italic text-gray-600 mb-4">"As an artist, the exposure I got from this community is incredible. The UI is very smooth and clean."</p>
            <div className="font-bold">- Ariful Islam</div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Testimonials;