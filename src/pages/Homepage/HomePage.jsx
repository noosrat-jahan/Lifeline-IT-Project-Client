import React from 'react';
import Hero from './components/Hero';
import Reviews from './components/Reviews';

const HomePage = () => {
    return (
        <div className='space-y-10'>
            
            <Hero></Hero>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;