import React from 'react';
import HeroOne from '../../Components/Home/HeroOne/HeroOne'
import HeroTwo from '../../Components/Home/HeroTwo/HeroTwo'
import HeroThree from '../../Components/Home/HeroThree/HeroThree'
import PriceSection from '../../Components/PricingSection/PriceSection';
const Home = () => {
    return (
        <>
            <HeroOne></HeroOne>
            <br />
            <br />
            <br />
            <HeroThree></HeroThree>
            <br />
            <br />
            <br />
            <HeroTwo></HeroTwo>
            <br />
            <br />
            <br />
            <PriceSection></PriceSection >
        </>
    );
};

export default Home;