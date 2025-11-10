import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAxios } from '../../hook/useAxios';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router';
import FavoritesCard from './FavoritesCard';

const Favorites = () => {
    const { user } = use(AuthContext);
    const axiosInstance = useAxios()
    const [art, setArt] = useState([]);
    console.log(user)
    useEffect(() => {
        if (!user?.email) return;
        axiosInstance.get(`/favorites-list?email=${user?.email}`)
            .then(res => {
                console.log(res.data.result)
                setArt(res.data.result)
            })
    }, [user])
    return (
       <section className='container mx-auto p-4 space-y-12'>
         <h2 className="text-3xl font-bold mb-6 text-center">Your Favorite Artworks</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {art.map(art => <FavoritesCard art={art}></FavoritesCard>)}
        </div>
       </section>
    );
};

export default Favorites;