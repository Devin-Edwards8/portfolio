import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HistoryCard from './HistoryCard';
import '../styling/Page.css'
import portrait2 from '../assets/portrait.jpg'

export default function BioPage(props) {
    return (  
        <div className="pageContainer">
            <Header className='main' onSwitch={props.onSwitch}/>
            <div className='aboutContainer'>
                <div className='pageDivider'>
                    <img src={portrait2} alt="Devin Edwards at a baseball game!" className='aboutPortrait'/>
                </div>
                <div className='pageDivider'>
                    <p className='subheader darkGray'>I'm a computer science student at the Ohio State University, with a passion for
                    all things software engineering and machine learning.</p>
                    <p className='aboutText'>For the past year, I've been working with Ubihere: Tracking Solutions on camera-based drone 
                    navigation and image classification research. I've also been working on personal and school projects in my free time. 
                    Check out some of my work on my <u onClick={() => props.onSwitch(0)} className='link'>project page</u>!</p>
                    <p className='aboutText'>I'm actively looking for opportunites to expand my programming abilities and contribute to 
                    meaningful work.</p>
                    <p className='aboutText'>Outside of school, I love sports and reading.<br/> <b style={{color: '#eb5e28'}}>Go Bengals!</b></p>
                </div>
            </div>
            <div className='bigBreak'/>
            <p className='subheaderLeft'>Education and Experience</p>
            <div className='cardContainer'>
                <HistoryCard alignment='flex-start' text={['Indian Hill High School', '16-20', 'GPA: 4.72']}/>
                <HistoryCard alignment='center' text={['The Ohio State University', '20-24', 'GPA: 3.65']}/>
                <HistoryCard alignment='flex-end' text={['Ubihere: Tracking Solutions', '22~', 'Software Engineering Intern']}/>
            </div>
            <Footer />
        </div>
    );
}