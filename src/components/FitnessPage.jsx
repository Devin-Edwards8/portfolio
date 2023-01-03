import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/devFit.css'
import workout_preview from '../assets/workout_preview.png'

export default function FitnessPage(props) {
    return (  
        <div className="devFitContainer">
            <Header className='fitHeader' onSwitch={props.onSwitch}/>
            <h1 className='fitTitle'>devFit</h1>
            <img src={workout_preview} alt="A preview of devFit's workout screen" className='fitPhoneImage'/>
            <Footer className='fitFooter'/>
        </div>
    );
}