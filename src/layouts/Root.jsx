import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import  { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;