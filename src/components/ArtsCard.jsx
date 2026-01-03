import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router'; 

const ArtsCard = ({ art }) => {
    return (
        <div className="relative group">
            {/* 1. Background Decorative Frame (Banner Image er moto) */}
            <div className="absolute -inset-1.5 border border-primary/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            
            {/* 2. Main Card Body */}
            <div className="relative z-10 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* 3. Image Section with Overlay */}
                <div className="relative h-56 w-full overflow-hidden">
                    <img 
                        src={art.imageUrl} 
                        alt={art.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Category Badge (Banner-er date badge style) */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-base-100/80 backdrop-blur-md rounded-full border border-base-300 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                            {art.category}
                        </p>
                    </div>
                </div>

                {/* 4. Content Section */}
                <div className="p-5 space-y-3">
                    <Fade direction="down" triggerOnce cascade damping={0.1}>
                        <div className="space-y-1">
                            {/* Title with Gradient on Hover */}
                            <h2 className="text-xl font-black uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                {art.title}
                            </h2>
                            {/* Artist Name with subtle border-left like banner description */}
                            <p className="text-sm text-neutral/70 border-l-2 border-primary/30 pl-3 italic">
                                by <span className="font-medium text-neutral">{art.artistName}</span>
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-base-200">
                            {/* Likes section with Stat-style look */}
                            <div className="flex items-center gap-1.5">
                                <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                                    <BiSolidLike size={18} />
                                </div>
                                <span className="text-sm font-bold tracking-tighter">
                                    {art.likes ?? 0} <span className="text-[10px] text-neutral/50 uppercase">Appreciations</span>
                                </span>
                            </div>

                            {/* Action Button - Banner Button Style */}
                            <Link 
                                to={`/art-details/${art._id}`} 
                                className="btn btn-primary btn-sm rounded-lg shadow-md hover:scale-105 transition-transform"
                            >
                                View Details
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default ArtsCard;