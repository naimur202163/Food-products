import React, { useEffect } from 'react';
import AppBanner from '../AppBanner/AppBanner';
import Header from '../Header/Header';
import MainProducts from '../MainProducts/MainProducts';
import Products from './../Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <Products />
            <MainProducts />


        </div>
    );
};

export default Home;