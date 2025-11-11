import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import FavoritesCard from './FavoritesCard';
import Loader from '../../components/Loader';
import useAxiosSecure from '../../hook/useAxiosSecure';

const Favorites = () => {
    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure()
    const [art, setArt] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(user)
    useEffect(() => {
        setLoading(true)
        axiosSecure.get(`/favorites-list?email=${user?.email}`)
            .then(res => {
                console.log(res.data.result)
                setLoading(false)
                setArt(res.data.result)
            })
    }, [user , axiosSecure])
    const handleUnfavorite = (id) => {
        console.log(id)
        axiosSecure.delete(`/unFevorites?id=${id}`)
            .then(res => {
                if (res.data.success) {
                    setLoading(false)
                    setArt(prev => prev.filter(a => a._id !== id));
                }
            })
    }
    if(loading){
        return <Loader></Loader>
    }
    return (
        <section className='container mx-auto p-4 space-y-12'>
            <h2 className="text-3xl font-bold mb-6 text-center">Your Favorite Artworks</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {art.map(art => <FavoritesCard art={art} handleUnfavorite={handleUnfavorite}></FavoritesCard>)}
            </div>
        </section>
    );
};

export default Favorites;