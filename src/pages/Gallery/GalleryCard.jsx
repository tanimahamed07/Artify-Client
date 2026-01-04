import React from 'react';
import { Fade } from "react-awesome-reveal";
import { BiSolidLike } from "react-icons/bi";
import { HiOutlineTrash, HiOutlinePencilSquare, HiOutlineEye } from "react-icons/hi2";
import { Link } from "react-router";

const GalleryCard = ({ art, handleDelete }) => {
  return (
    <div className="relative group">
      {/* Background Decorative Frame */}
      <div className="absolute -inset-1.5 border border-primary/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
      
      {/* Main Card */}
      <div className="relative z-10 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full">
        
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={art?.imageUrl}
            alt={art?.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-base-100/80 backdrop-blur-md rounded-full border border-base-300 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">
              {art.category}
            </p>
          </div>

          {/* Quick View Link */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <Link to={`/art-details/${art._id}`} className="btn btn-circle btn-primary btn-sm shadow-xl scale-75 group-hover:scale-100 transition-transform duration-300">
                <HiOutlineEye size={20} />
             </Link>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex-1 space-y-1">
            <h2 className="text-xl font-black uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
              {art.title}
            </h2>
            <p className="text-sm text-neutral/70 border-l-2 border-primary/30 pl-3 italic">
               ID: {art._id.slice(-6).toUpperCase()}
            </p>
          </div>

          {/* Bottom Stats & Actions */}
          <div className="flex items-center justify-between pt-5 border-t border-dashed border-base-200 mt-4">
            {/* Likes */}
            <div className="flex items-center gap-1.5">
              <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                <BiSolidLike size={16} />
              </div>
              <span className="text-xs font-bold tracking-tighter">
                {art.likes ?? 0} <span className="text-[10px] text-neutral/40 uppercase">Appreciations</span>
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Delete */}
              <button
                onClick={() => handleDelete(art._id)}
                className="btn btn-ghost btn-sm text-error p-2 hover:bg-error/10 rounded-lg transition-colors"
                title="Delete Artwork"
              >
                <HiOutlineTrash size={20} />
              </button>
              
              {/* Update */}
              <Link
                to={`/dashboard/update/${art._id}`}
                className="btn btn-primary btn-sm rounded-lg shadow-md hover:scale-105 transition-all text-[10px] font-bold uppercase tracking-widest"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;