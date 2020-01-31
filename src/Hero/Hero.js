import React from 'react';
import HeroPortrait from './HeroPortrait';
import Talents from './Talents';

const data = require('./data.json');


export default function Hero(props) {

    const { name, talents } = props;

    const hero = Object.values(data).filter((h) => h.shortName === name)[0];

    if (!hero) {
        throw new Error(`Hero named ${name} not found`);
    }

    const defaults = {
        size: 'md',
        label: hero.name
    }
    
    const p = Object.assign(defaults,props);

    return (
        <>
            <HeroPortrait name={name} {...p} />
            {talents ? <Talents talents={hero.talents} selections={talents} /> : null}
        </>
    );
}