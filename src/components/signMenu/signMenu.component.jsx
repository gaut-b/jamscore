import React from 'react';
import SignContainer from '../signContainer/signContainer.component';

import Bar from '../../assets/symbols/bar.svg';
import BarTwoChords from '../../assets/symbols/bar_2chords.svg';
import BarThreeChords from '../../assets/symbols/bar_3chords.svg';
import BarFourChords from '../../assets/symbols/bar_4chords.svg';
import Repeat from '../../assets/symbols/repeat.svg';
import RepeatEnd from '../../assets/symbols/repeat_end.svg';
import BarFirstRep from '../../assets/symbols/bar_1rep.svg';
import BarSecondRep from '../../assets/symbols/bar_2rep.svg';
import Coda from '../../assets/symbols/bar_coda.svg';
import ToCoda from '../../assets/symbols/bar_toCoda.svg';
import End from '../../assets/symbols/end.svg';
import Start from '../../assets/symbols/start.svg';
import Simile from '../../assets/symbols/simile.svg';

import './signMenu.styles.css';

const signs = [
    {
        sign: Bar,
        position: 'background',
    },
    {
        sign: BarTwoChords,
        position: 'background'
    },
    {
        sign: BarThreeChords,
        position: 'background'
    },
    {
        sign: BarFourChords,
        position: 'background'
    },
    {
        sign: Repeat,
        position: 'left',
    },
    {
        sign: RepeatEnd,
        position: 'right'
    },
    {
        sign: BarFirstRep,
        position: 'background'
    },
    {
        sign: BarSecondRep,
        position: 'background'
    },
    {
        sign: Coda,
        position: 'background',
    },
    {
        sign: ToCoda,
        position: 'background'
    },
    {
        sign: Start,
        position: 'left'
    },
    {
        sign: End,
        position: 'right'
    },
    {
        sign: Simile,
        position: 'center'
    },
]

const SignMenu = () => {

    return (
        <div className="signsContainer">
            {signs.map( ({sign, position}, index) => <SignContainer key={index} sign={sign} position={position} type="menu" /> )}
        </div>
    );
};


export default SignMenu;
