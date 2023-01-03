import React from 'react'
import '../styling/Footer.css'

export default function Footer(props) {
    let footerClass, footerTextClass
    switch(props.className) {
        case 'fitFooter':
            footerClass = 'fitFooter'
            footerTextClass = 'fitFooterText'
            break;
        case 'ZeldaFooter':
            footerClass = 'ZeldaFooter'
            footerTextClass = 'ZeldaFooterText'
            break;
        default: 
            footerClass = 'footer'
            footerTextClass = 'footerText'
            break;
    }
    return(
        <div className={footerClass}>
            <p className={footerTextClass}>Designed by Devin Edwards</p>
        </div>
    );
}