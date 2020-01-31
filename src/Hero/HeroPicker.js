import React, { useState } from 'react';
import Select from '../UI/Forms/AdvancedSelect';
import components from 'react-select';
import HeroPortrait from './HeroPortrait';

const css = require('./HeroPicker.module.css')

const data = require('./data.json');

const options = Object.values(data).map((h) => { return { value: h.shortName, label: h.name } });

const Option = ({ children, ...props }) => (
    <components.Option {...props} />
)

export default function HeroDropdown(props) {
    const { showHeroThumbnail } = props;

    const [selected, setSelected] = useState({ value: null, label: '' });
    
    return (
        <Select
            value={selected}
            isSearchable
            isClearable
            onChange={setSelected}
            options={options}
        />
    )
}
