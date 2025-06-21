import React from 'react';
import Header from '../Components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer';
import Marquee from "react-fast-marquee";
const MainLayout = () => {
    return (
        <div className=' '>
            <Marquee className='bg-gold w-full p-2 text-white'>
                🚀Boost Your Skills with 90% OFF🔥 WhatsApp us: 📱 +8801866725093 | +8801705725296
            </Marquee>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;