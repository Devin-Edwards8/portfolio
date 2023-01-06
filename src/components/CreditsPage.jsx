import React from 'react';
import '../styling/Page.css';
import Header from './Header';
import Footer from './Footer';

const gitLink = "https://github.com/Devin-Edwards8/Portfolio-Website"

export default function BioPage(props) {
    return (  
        <div className="pageContainer">
            <Header onSwitch={props.onSwitch}/>
            <p className='paragraphText'>This website was designed by myself, but inspired by portfolio's from <a 
            href="https://www.jennifermfernandez.com/" target="_blank" rel="noopener noreferrer" className='link'>Jennifer Fernandez
            </a> and <a href="https://www.seanhalpin.design/" target="_blank" rel="noopener noreferrer" className='link'>Sean Halpin</a>. 
            The source code can be found on this <a href={gitLink}  target="_blank" rel="noopener noreferrer" className='link'> 
            GitHub Page</a>. Big thank you to my mom for taking my picture!</p>
            <Footer />
        </div>
    );
}