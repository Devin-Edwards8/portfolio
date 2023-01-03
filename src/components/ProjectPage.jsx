import React, { useState } from 'react';
import Footer from './Footer';
import '../styling/Page.css'
import Header from './Header';
import screen1 from '../assets/devFit_preview.png'
import link1 from '../assets/link_down_left.png'
import link2 from '../assets/link_celly.png'
import link3 from '../assets/link_down_left.png'
import link4 from '../assets/link_down_right.png'

export default function ProjectPage(props) {
    const [link, setLink] = useState(link1)
    const [phoneClass, setClass] = useState('phoneImage')

    return (  
        <div className='pageContainer'>
            <Header onSwitch={props.onSwitch}/>
            <div style={{alignSelf: 'flex-start', width: '60%'}}>
                <p className='greetingText'><b className='greeting'>Hello!</b><br/>I'm a computer science student at the Ohio State University.
                 Check out some of my recent project work below!</p>
            </div>
            <div className='projectPreview' onMouseEnter={() => setClass('phoneImageBig')} 
            onMouseLeave={() => setClass('phoneImage')} onClick={() => props.onSwitch(3)}>
                <img className={phoneClass} src={screen1} alt="A preview of the workout screen of my fitness App, devFit!"/>
                <div className='descriptionContainer'>
                    <p className='projectType'>MOBILE</p>
                    <p className='projectName'>devFit</p>
                </div>
            </div>
            <div className='projectPreview' onMouseEnter={() => setLink(link2)} onMouseLeave={() => setLink(link1)}
            onClick={() => props.onSwitch(4)}>
                <img className="zeldaImage" src={link} alt="A dynamic image of Link, from The Legned of Zelda!"/>
                <div className='descriptionContainer'>
                    <p className='projectType'>GAME</p>
                    <p className='projectName'>Zelda</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
