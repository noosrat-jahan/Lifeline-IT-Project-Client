import React from 'react';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import About from './components/About';
import FeaturedCouses from './components/FeaturedCouses';

const HomePage = () => {
    return (
        <div className='w-10/12 mx-auto space-y-10'>
            
            <Hero></Hero>
            <About></About>
            <FeaturedCouses></FeaturedCouses>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;