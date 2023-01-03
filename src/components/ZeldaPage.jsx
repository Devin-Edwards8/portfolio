import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/Zelda.css'
import gameplay from '../assets/gameplay.png'

export default function ZeldaPage(props) {
    return (  
        <div className="ZeldaContainer">
            <Header className='ZeldaHeader' onSwitch={props.onSwitch}/>
            <p className='ZeldaTitle'>The Legend Of Zelda</p>
            <img src={gameplay} alt="Zelda gameplay" className="gameplay"/>
            <Footer className='ZeldaFooter'/>
        </div>
    );
}