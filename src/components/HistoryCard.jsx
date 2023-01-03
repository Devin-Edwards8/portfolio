import React, { useState } from 'react';
import '../styling/Page.css'

export default function HistoryCard(props) {
    const [condensed, isCondensed] = useState(true);
    const cardHeader = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2em'
    }
    return (  
        <>
        {condensed ? 
        <div className='condensedCard' onMouseEnter={() => isCondensed(false)} style={{alignSelf: props.alignment}}>
            <div style={cardHeader}>
                <p className='subheader2 beige'>{props.text[0]}</p>
            </div>
        </div> :
        <div className='expandedCard' onMouseLeave={() => isCondensed(true)} style={{alignSelf: props.alignment}}>
            <div>
                <p className='subheader2 beige'>{props.text[0]}</p>
                <p className='subheader3 pastelRed spanning smallLeftPadding'>{props.text[2]}</p>
            </div>
            <p className='subheader2 beige'>{props.text[1]}</p>
            {/* <p className='cardText beige'>{props.text[3]}</p> */}
        </div>
        }
        </>
    );
}