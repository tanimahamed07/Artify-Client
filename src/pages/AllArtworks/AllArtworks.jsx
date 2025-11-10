import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hook/useAxios';
import ArtsCard from '../../components/ArtsCard';
import Loader from '../../components/Loader';

const AllArtworks = () => {
    const axiosInstance = useAxios();
    const [artworks, setArtworks] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axiosInstance.get('/all-artworks')
            .then(res => {
                const publicArtworks = res.data.result.filter(
                    (art) => art.visibility === true || 'true'
                );
                // console.log(publicArtworks)
                setArtworks(publicArtworks)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [axiosInstance]);
    const filteredArtworks = artworks.filter(art =>
        art.artistName?.toLowerCase().includes(search.toLowerCase())
    );
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className='container mx-auto p-4 space-y-12'>
            <h2 className="text-3xl text-center font-bold mb-6">Featured Artworks</h2>
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search by artist"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-1/2"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtworks.map((art) => (
                    <ArtsCard art={art}></ArtsCard>
                ))}
            </div>
        </div>

    );
};

export default AllArtworks;