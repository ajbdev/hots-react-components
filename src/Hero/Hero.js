import React from 'react';
import HeroPortrait from './HeroPortrait';
import Talents from './Talents';

const data = require('./data.json');


export default function Hero(props) {
    const defaults = {
        size: 'md'
    };

    const { name, size, talents } = Object.assign(defaults, props);

    const hero = Object.values(data).filter((h) => h.shortName === name)[0];

    if (!hero) {
        throw new Error(`Hero named ${name} not found`);
    }

    return (
        <>
            <HeroPortrait name={name} label={hero.name} size={size} />
            {talents ? <Talents talents={hero.talents} selections={talents} /> : null}
        </>
    );
}