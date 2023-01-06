import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/devFit.css'
import nutrition1 from '../assets/nutrition1.png'
import nutrition2 from'../assets/nutrition2.png'
import quoteScreen from '../assets/mainscreen.png'
import workout1 from '../assets/workout1.png'
import workout2 from '../assets/workout_preview.png'

export default function FitnessPage(props) {
    return (  
        <div className="devFitContainer">
            <Header className='fitHeader' onSwitch={props.onSwitch}/>
            <h1 className='fitTitle'>devFit<br/></h1>
            <p className='fitDescription'>A personal fitness app.</p>
            <div className='phoneArray'>
                <img src={nutrition1} style={{alignSelf: 'flex-end'}} alt="devFit's nutrition screen" 
                className='fitPhoneImage'/>
                <img src={quoteScreen} style={{alignSelf: 'center'}} alt="devFit's main screen" 
                className='fitPhoneImage'/>
                <img src={workout1} style={{alignSelf: 'flex-start'}} alt="devFit's workout screen" 
                className='fitPhoneImage'/>
            </div>
            <p className='fitSubheader gapTop'>Motivation</p>
            <p className='fitText width1 gapBottom'>
                The goal of this project was to create a personalized fitness app for my needs. I wanted an app that
                could help me track my workouts and my nutritional goals. Using the React Native framework, I designed
                an interface to simplify my fitness journey.
            </p>
            <div className='featureContainer'>
                <div style={{width: '50%'}}>
                    <img src={workout2} alt="devFit's workout screen" className='fitPhoneImage'
                    style={{paddingLeft: '8rem'}}/>
                </div>
                <div className='featureDescription'>
                    <p className='fitSubheader width2'>Saving Workouts</p>
                    <p className='fitText width2'>
                        The devFit workout screen allows a user to easily save their workouts for future reference. Each workout 
                        card contains exercises, sets, and reps. Exercises can be added and deleted as necessary. Each card can
                        be minimized when unused, giving the user a simple interface to store and access their personal workout plans.
                    </p>
                </div>
            </div>
            <p  className='fitSubheader gapTop'>Saving Data</p>
            <p  className='fitText width1 gapBottom'>
                One of my primary challenges in development was saving user data. Each screen contains it's own information, but that
                information can't be lost as a user switches screens. devFit's state information is structured to save a user's data,
                as they switch between screens.
            </p>
            <div className='featureContainer' style={{paddingLeft: '8rem'}}>
                <div className='featureDescription'>
                    <p className='fitSubheader width2'>Tracking Nutrition</p>
                    <p className='fitText width2'>
                        The devFit nutrition screen helps a user track their protein and calorie intake. Throughout the day, 
                        meals are tracked to determine a user's progress toward their goals. If the nutritional information is
                        unknown, a user can search for it in <a href="https://developer.edamam.com/food-database-api" target="_blank" 
                        rel="noopener noreferrer" className='fitLink'>EDAMAM's Food and Grocery Database</a>.
                    </p>
                </div>
                <div style={{width: '50%'}}>
                    <img src={nutrition2} alt="devFit's nutrition screen" className='fitPhoneImage' 
                    style={{paddingLeft: '4rem'}}/>
                </div>
            </div>
            <Footer className='fitFooter'/>
        </div>
    );
}