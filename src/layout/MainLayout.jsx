import React from 'react';
import Header from '../Components/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=' '>
            <div className='bg-gold w-full p-2 text-secondary'>
                🚀Boost Your Skills with 90% OFF🔥 WhatsApp us: 📱 +8801866725093 | +8801705725296
            </div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;