import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/ChatGPT Image Nov 10, 2025, 11_00_39 PM.png'

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10 mt-10 border-t-2 border-gray-400">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                                        <img className='w-[90px]' src={logo} alt="" />
                    
                    <h2 className="text-xl font-bold mb-4">Artify</h2>
                    <p className="text-gray-400">
                        A creative platform for artists to showcase their artworks, connect with the community, and get inspired.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/explore" className="hover:text-white transition">Explore Artworks</a></li>
                        <li><a href="/add-artwork" className="hover:text-white transition">Add Artwork</a></li>
                        <li><a href="/my-gallery" className="hover:text-white transition">My Gallery</a></li>
                        <li><a href="/favorites" className="hover:text-white transition">My Favorites</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact & Social</h2>
                    <p className="text-gray-400 mb-4">Email: support@artify.com</p>
                    <div className="flex space-x-4">
                    <FaFacebookF size={24}/>
                        <FaXTwitter size={24} />
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} Artify. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
