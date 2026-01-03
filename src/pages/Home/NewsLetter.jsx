import React from "react";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white text-center my-10">
      <Fade triggerOnce>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Exhibition!</h2>
          <p className="mb-6 opacity-90">Subscribe to our newsletter and get updates on trending artists and upcoming art events.</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs text-black" />
            <button className="btn btn-secondary">Subscribe Now</button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Newsletter;