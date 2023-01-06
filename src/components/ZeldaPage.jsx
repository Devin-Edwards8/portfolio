import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/Zelda.css'
import gameplay1 from '../assets/gameplay.mov'
import gameplay2 from '../assets/gameplay.mp4'
import multiplayer1 from '../assets/multiplayer.mov'
import multiplayer2 from '../assets/multiplayer.mp4'
import interface_preview from '../assets/interface.png'
import git from '../assets/git_icon2.png'

export default function ZeldaPage(props) {
    return (  
        <div className="ZeldaContainer">
            <Header className='ZeldaHeader' onSwitch={props.onSwitch}/>
            <div className='gitContainer'>
                <h1 className='ZeldaTitle'>The Legend of Zelda<br/></h1>
                <a href="https://github.com/Devin-Edwards8/Game3902" target="_blank" rel="noopener noreferrer">
                    <img src={git} alt="github icon" className='git'/>
                </a>
            </div>
            <p className='ZeldaDescription'>Remaking a classic.</p>
            <video width="900rem"  height="600rem" loop autoPlay muted>
                <source src={gameplay1} type="video/mov" />
                <source src={gameplay2} type="video/mp4" />
            </video>
            <p className='ZeldaSubheader gapTop'>The Goal</p>
            <p className='ZeldaText width1 gapBottom'>
                A semester-long group project  was the purpose of one my Junior year courses. Our task? To recreate the dungeon level of
                the Legend of Zelda (NES) in a series of two/three week sprints. The class promoted good code-quality and teamwork,
                as we continually expanded on our product. Huge thanks to my teammates: Eugene Kim, Linran Wu, David-Benoit Tano, and 
                Rand Singer!
            </p>
            <div className='featureContainer gapBottom'>
                <video width="600rem"  height="400rem" loop autoPlay muted style={{marginLeft: '4rem'}}>
                    <source src={multiplayer1} type="video/mov" />
                    <source src={multiplayer2} type="video/mp4" />
                </video>
                <div style={{marginLeft: '4rem'}}>
                    <p className='ZeldaSubheader width2'>Introducing Multiplayer</p>
                    <p className='ZeldaText width2'>
                        For our final sprint, the team was asked to add a brand-new feature to the game. We chose multiplayer!
                        With our two-player mode, users can go to battle with a friend to defeat enemies and complete the level. 
                    </p>
                </div>
            </div>
            <p className='ZeldaSubheader'>Building for Growth</p>
            <p className='ZeldaText width1'>
                Due to the "mock-agile" structure of the class, the team had to develop the game piece by piece. An emphasis
                was placed on code maintainability, within the class and our group. Designing our code to be easily scalable 
                allowed our group to add a multiplayer mode in a short period of time. 
            </p>
            <div className='featureContainer gapTop'>
                <div style={{marginLeft: '2em'}}>
                    <p className='ZeldaSubheader width2'>Remaking the Interface</p>
                    <p className='ZeldaText width2'>
                        On top of the game play, the group tackled several interface elements of the original game. The HUD 
                        and pause screen allow the user to track and choose between inventory items. To go above and beyond,
                        our group added a start screen and a shop to enhance user experience.
                    </p>
                </div>
                <img src={interface_preview} alt="The shop, HUD, start, ann pause screens" className='imageGrid'/>
            </div>
            <Footer className='ZeldaFooter'/>
        </div>
    );
}