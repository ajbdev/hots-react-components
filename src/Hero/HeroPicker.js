import React, { useState } from 'react';
import Select from '../UI/Forms/AdvancedSelect';

const css = require('./HeroPicker.module.css')

const data = require('./data.json');

const options = Object.values(data).map((h) => { return { value: h.shortName, label: h.name } });


export default function HeroPicker(props) {
    const [selected, setSelected] = useState({ value: null, label: '' });
    
    return (
        <Select
            className={css.heroPicker}
            value={selected}
            isSearchable={true}
            onChange={setSelected}
            options={options}
        />
    )
}