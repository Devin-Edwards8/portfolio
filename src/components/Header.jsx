import React from 'react'
import '../styling/Header.css'

export default function Header(props) {
    let headerClass, headerNameClass, navContainerClass, navClass;
    switch(props.className) {
        case 'fitHeader':
            headerClass = 'fitHeader';
            headerNameClass = 'fitHeaderName'
            navContainerClass = 'fitNavContainer'
            navClass = 'fitNav'
            break;
        case 'ZeldaHeader':
            headerClass = 'ZeldaHeader';
            headerNameClass = 'ZeldaHeaderName'
            navContainerClass = 'ZeldaNavContainer'
            navClass = 'ZeldaNav'
            break;
        default:
            headerClass = 'header';
            headerNameClass = 'headerName'
            navContainerClass = 'navContainer'
            navClass = 'nav'
            break;
    }
    return(
        <div className={headerClass}>
            <h1 className={headerNameClass}>Devin Edwards</h1>
            <div className='navBar'>
                <div className={navContainerClass} onClick={() => props.onSwitch(0)}><p className={navClass}>Projects</p></div>
                <div className={navContainerClass} onClick={() => props.onSwitch(1)}><p className={navClass}>About</p></div>
                <div className={navContainerClass} onClick={() => props.onSwitch(2)}><p className={navClass}>Credit</p></div>
            </div>
        </div>
    );
}