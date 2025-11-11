import React from 'react';
import { Fade } from 'react-awesome-reveal';
import toast from 'react-hot-toast';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router';

const FavoritesCard = ({ art, handleUnfavorite }) => {
    const handleClick = () => {
        toast.success('Remove from Favorite')
        handleUnfavorite(art._id)
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Fade cascade={false}
                triggerOnce={true}>
                <figure>
                    <img src={art?.imageUrl} alt={art?.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <Fade direction='down' triggerOnce={true}>
                        <h2 className="card-title">{art.title}</h2>
                        <p>Artist: {art.artistName}</p>
                        <p>Category: {art.category}</p>
                    </Fade>
                    <Fade direction='up'>
                        <p className="flex items-center gap-2 text-lg font-medium">
                            <BiSolidLike size={24} className="text-blue-500" />
                            Likes: {art.likes ?? 0}
                        </p>
                        <div className='flex justify-end gap-2.5'>
                            <button onClick={handleClick} className='btn btn-outline border-[#b89e4f] text-primary hover:bg-secondary hover:text-white'>Unfavorite</button>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
};

export default FavoritesCard;