import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/ChatGPT Image Nov 10, 2025, 11_00_39 PM.png";

const Footer = () => {
  return (
    <footer className="relative bg-base-200 text-neutral pt-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-base-300">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Artify Logo" className="w-24" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              Artify
            </h2>
            <p className="text-sm text-neutral/60 leading-relaxed max-w-sm">
              A creative platform for artists to showcase their artworks, connect
              with the community, and explore inspiring creations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Explore Artworks", path: "/explore" },
                { name: "Add Artwork", path: "/add-artwork" },
                { name: "My Gallery", path: "/my-gallery" },
                { name: "My Favorites", path: "/favorites" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="group inline-flex items-center gap-2 text-neutral/60 hover:text-primary transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest mb-6">
              Contact & Social
            </h3>
            <p className="text-sm text-neutral/60 mb-6">
              Email:{" "}
              <span className="text-neutral font-medium">
                support@artify.com
              </span>
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-base-100 border border-base-300 hover:bg-primary hover:text-white transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-base-100 border border-base-300 hover:bg-secondary hover:text-white transition-all"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-xs text-neutral/50 tracking-widest uppercase">
          © {new Date().getFullYear()} Artify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
