import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ChooseDestination from '../ChooseDestination/ChooseDestination';
import FetchAllServices from '../FetchAllServices/FetchAllServices';
import Reviews from '../Reviews/Reviews';
import Speciality from '../Speciality/Speciality';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{backgroundColor:'skyblue'}}>
            <div style={{ height:'20%'}}>
            <NavBar/> 
            <TopBanner/>
            </div>
            <div style={{ height:'17%', border: '1px solid black'}}>
                <Speciality/>
            </div>
            <div style={{ height:'17%', border: '1px solid black'}}>
                <FetchAllServices/>
            </div>
            <div style={{ height:'17%', border: '1px solid black'}}>
                <ChooseDestination/>
            </div>
            <div style={{ height:'17%', border: '1px solid black'}}>
                <Reviews/>
            </div>
            
           <div style={{ height:'12%'}}>
           <Footer/>
           </div>
           
        </div>

    );
};

export default Home;