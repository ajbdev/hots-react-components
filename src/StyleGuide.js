import React from 'react';
import Hero from './Hero/Hero';
import css from './App.module.css';
import {Button, Select} from './UI/Forms';
import HeroPicker, { HeroDropdown } from './Hero/HeroPicker';

export default function StyleGuide(props) {
    return (
        <div className={css.app}>
        <h1>Heroes of the Storm React Components</h1>
        <h2>User interface controls</h2>
        <div className={css.exampleSection}>
            <Button>Play game</Button>{" "}
            <Button disabled="disabled">Cost: $10000</Button> 
        </div>
        <div className={css.exampleSection}>
            <Button size="sm">Raiders roll out</Button>{" "}
            <Select>
            <option>Release Date</option>
            <option>Price Ascending</option>
            <option>Price Descending</option>
            <option>Alphabetical</option>A
            </Select>
        </div>
        <h2>Hero Portraits</h2>
        <div className={css.exampleSection}>
            <Hero name="murky" size="lg" />
            <Hero name="arthas" size="md" />
        </div>
        <h3>With talents</h3>
        <div className={css.exampleSection}>
            <Hero name="thebutcher" size="lg" talents="01110101" />
        </div>
        <div className={css.exampleSection}>
            <Hero name="zagara" size="lg" talents="2221" />
        </div>
        <div className={css.exampleSection}>
            <Hero name="lucio" size="lg" talents="21?0" />
        </div>
        <h2>Hero Dropdown</h2>
        <div className={css.exampleSection}>
            <HeroPicker />
        </div>
        </div>
    );
}