import React from 'react';
import toast from 'react-hot-toast';
import { BiSolidLike } from 'react-icons/bi';
import { HiOutlineTrash, HiOutlineEye } from 'react-icons/hi2';
import { Link } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const FavoritesCard = ({ art, handleUnfavorite }) => {
    const handleRemove = () => {
        toast.success('Removed from Favorites');
        handleUnfavorite(art._id);
    };

    return (
        <div className="relative group">
            {/* 1. Background Decorative Frame (ArtsCard style) */}
            <div className="absolute -inset-1.5 border border-secondary/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            
            {/* 2. Main Card Body */}
            <div className="relative z-10 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full">
                
                {/* 3. Image Section with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                    <img 
                        src={art?.imageUrl} 
                        alt={art?.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Category Badge (Left top - ArtsCard style) */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-base-100/80 backdrop-blur-md rounded-full border border-base-300 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                            {art.category}
                        </p>
                    </div>
                </div>

                {/* 4. Content Section */}
                <div className="p-5 flex flex-col flex-1">
                    <Fade direction="down" triggerOnce cascade damping={0.1}>
                        <div className="space-y-1 flex-1">
                            {/* Title with Gradient on Hover */}
                            <h2 className="text-xl font-black uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                {art.title}
                            </h2>
                            {/* Artist Name */}
                            <p className="text-sm text-neutral/70 border-l-2 border-secondary/30 pl-3 italic">
                                by <span className="font-medium text-neutral">{art.artistName}</span>
                            </p>
                        </div>

                        {/* Bottom Stats & Actions */}
                        <div className="flex items-center justify-between pt-5 border-t border-dashed border-base-200 mt-4">
                            {/* Likes Section */}
                            <div className="flex items-center gap-1.5">
                                <div className="p-1.5 bg-secondary/10 rounded-lg text-secondary">
                                    <BiSolidLike size={18} />
                                </div>
                                <span className="text-sm font-bold tracking-tighter">
                                    {art.likes ?? 0} <span className="text-[10px] text-neutral/40 uppercase">Votes</span>
                                </span>
                            </div>

                            {/* Actions Group */}
                            <div className="flex items-center gap-2">
                                {/* Remove Button */}
                                <button 
                                    onClick={handleRemove}
                                    className="btn btn-ghost btn-sm text-error p-2 hover:bg-error/10 rounded-lg transition-colors"
                                    title="Remove from favorites"
                                >
                                    <HiOutlineTrash size={20} />
                                </button>
                                
                                {/* View Details Button */}
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default FavoritesCard;