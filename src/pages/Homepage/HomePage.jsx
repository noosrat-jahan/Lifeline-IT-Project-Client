import React from 'react';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import About from './components/About';

import OnlineCourse from './components/OnlineCourse';
import OfflineCourse from './components/OfflineCourse';
import Features from './components/Features';
import JoinCommunity from './components/JoinCommunity';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto space-y-10'>
            
            <Hero></Hero>
            <About></About>
            <OnlineCourse></OnlineCourse>
            <OfflineCourse></OfflineCourse>            
            <Reviews></Reviews>
            <Features></Features>
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default HomePage;