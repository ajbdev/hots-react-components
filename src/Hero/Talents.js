import React from 'react';
import css from './Talents.module.css';
import Hero from './Hero';

const findTalent = (talents, id) => {
    return Object.keys(talents).map((level) => {
        const tier = talents[level];
        return tier.filter((talent, slot) => { 
            return talent.talentTreeId === id
        })[0];
    }).filter((talent) => {
        return talent;
    })[0];
}

export const Talent = (props) => {    
    const { selection, options } = props;

    const talent = options[selection];

    const bgStyle = talent ? { backgroundImage: `url('/images/talents/${talent.icon}')` } : null;

    return (
        <div className={css.talent} style={bgStyle}>
            {!talent 
                ? <div className={css.missing}>?</div>
                : <div>&nbsp;</div>}
        </div>
    );
}

export default function Talents(props) {
    const { talents } = props;

    let selections = props.selections.toString().substr(0,8);
    
    return (
        <div className={css.talents}>
            {Object.keys(talents).map((tier, i) => (
                i < selections.length ? <Talent tier={tier} options={talents[tier]} selection={selections[i]} key={tier} /> : null
            ))}
        </div>
    );
}