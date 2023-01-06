import React, { Component } from 'react'
import '../styling/Homepage.css'
// import portrait from '../assets/portrait.png'

class Homepage extends Component {
    render() { 
        return (
            <div className='container'>
                <div className='textContainer'>
                    <h1 className='name'>Devin Edwards</h1>
                    <p className='title'>Programmer | Student</p>
                    <p className='page' onClick={() => this.props.onSwitch(1)}>Projects</p>
                    <p className='page' onClick={() => this.props.onSwitch(2)}>About</p>
                    <p className='page' onClick={() => this.props.onSwitch(3)}>Credit</p>
                </div>
                {/* <img className='image' src={portrait} alt="Portrait of Devin Edwards"/> */}
            </div>
        );
    }
}
 
export default Homepage;