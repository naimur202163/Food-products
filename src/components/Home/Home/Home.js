import React from 'react';
import AppBanner from '../AppBanner/AppBanner';
import Header from '../Header/Header';
import MainProducts from '../MainProducts/MainProducts';
import MiddleBanner from '../PizzaBanner/MiddleBanner/MiddleBanner';
import PizzaBanner from '../PizzaBanner/PizzaBanner';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>
            <PizzaBanner />
            <Products />
            <MainProducts />
            <MiddleBanner />
            <AppBanner />
        </div>
    );
};

export default Home;