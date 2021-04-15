import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ChooseDestination from '../ChooseDestination/ChooseDestination';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Speciality from '../Speciality/Speciality';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <div style={{ height:'800px'}}>
            <NavBar/> 
            <TopBanner/>
            </div>
            <div style={{ height:'500px', border: '1px solid black'}}>
                <Speciality/>
            </div>
            <div style={{ height:'500px', border: '1px solid black'}}>
                <Services/>
            </div>
            <div style={{ height:'400px', border: '1px solid black'}}>
                <ChooseDestination/>
            </div>
            <div style={{ height:'400px', border: '1px solid black'}}>
                <Reviews/>
            </div>
            
           <div style={{ height:'100px'}}>
           <Footer/>
           </div>
           
        </div>

    );
};

export default Home;