import React, { useEffect } from 'react';
import AppBanner from '../AppBanner/AppBanner';
import Header from '../Header/Header';
import MainProducts from '../MainProducts/MainProducts';
import MiddleBanner from '../PizzaBanner/MiddleBanner/MiddleBanner';
import PizzaBanner from '../PizzaBanner/PizzaBanner';
import Products from './../Products/Products';
import PizzaBox from './../PizzaBox/PizzaBox';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <PizzaBanner />
            <Products />
            <MainProducts />
            <PizzaBox />
            <MiddleBanner />

            <AppBanner />

        </div>
    );
};

export default Home;