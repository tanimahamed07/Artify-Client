import React from "react";
import { Link } from "react-router";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/ChatGPT Image Nov 10, 2025, 11_00_39 PM.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <img className="w-10" src={logo} alt="Artify Logo" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase">
                ARTIFY
              </span>
            </Link>
            <p className="text-base-content/70 leading-relaxed max-w-sm">
              Discover and share stunning artworks from artists worldwide. Explore the finest collections in our creative community.
            </p>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-base-content border-l-4 border-primary pl-3">Navigation</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-base-content/70 hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/all-artworks" className="text-base-content/70 hover:text-primary transition-colors font-medium">Explore Artworks</Link></li>
              <li><Link to="/about" className="text-base-content/70 hover:text-primary transition-colors font-medium">About</Link></li>
              <li><Link to="/contract" className="text-base-content/70 hover:text-primary transition-colors font-medium">Contact Us</Link></li>
              <li><Link to="/dashboard" className="text-base-content/70 hover:text-primary transition-colors font-medium">Dashboard</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-base-content border-l-4 border-secondary pl-3">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-base-content/70">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-secondary" />
                <span>support@artify.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-secondary" />
                <span>Creative Studio, Paris, France</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-base-content/40">
          <p>© {currentYear} ARTIFY — THE GLOBAL CREATIVE DIRECTORY</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 ml-4">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              System Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
