import React from 'react';
import Hero from './Hero/Hero';
import css from './StyleGuide.module.css';
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
                    <option>Alphabetical</option>
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
            <h2>Tables</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{width:200}}>Hero</th>
                        <th style={{width:100}}>KDA</th>
                        <th style={{width:90}}>Hero Dmg</th>
                        <th style={{width:90}}>Healing</th>
                        <th style={{width:90}}>Exp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Hero name="valla" size="sm" label="" hideBorder={true} />
                            &nbsp;
                            Valla
                        </td>
                        <td>
                            7 / 4 / 10
                        </td>
                        <td>
                            87655
                        </td>
                        <td>
                            12566
                        </td>
                        <td>
                            10759
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Hero name="lili" size="sm" label="" hideBorder={true} />
                            &nbsp;
                            Lili
                        </td>
                        <td>
                            2 / 0 / 8
                        </td>
                        <td>
                            24583
                        </td>
                        <td>
                            87125
                        </td>
                        <td>
                            8667
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Hero name="diablo" size="sm" label="" hideBorder={true} />
                            &nbsp;
                            Diablo
                        </td>
                        <td>
                            6 / 1 / 3
                        </td>
                        <td>
                            41005
                        </td>
                        <td>
                            18766
                        </td>
                        <td>
                            9780
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Hero name="liming" size="sm" label="" hideBorder={true} />
                            &nbsp;
                            Li Ming
                        </td>
                        <td>
                            10 / 0 / 8
                        </td>
                        <td>
                            96401
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            11287
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Hero name="leoric" size="sm" label="" hideBorder={true} />
                            &nbsp;
                            Leroic
                        </td>
                        <td>
                            4 / 5 / 10
                        </td>
                        <td>
                            36720
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            10388
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}