import React from 'react';
import css from './AdvancedSelect.module.css'
import Select from 'react-select';

/*

.select {
    border: 3px solid rgb(44, 31, 91);
    color: rgba(170, 157, 243, 0.9);
    font-size: 1.2rem;
    padding: .3rem;
    background-color: transparent;
    background-image: linear-gradient(to bottom, transparent 1%, rgb(27, 19, 56) 100%);
}

.select:hover {
    border: 3px solid rgb(75, 53, 153);
}
*/

const styles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to bottom, transparent 1%, rgb(27, 19, 56) 100%)',
        borderRadius: 0,
        border: '3px solid rgb(44, 31, 91)'
    }),
    option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
        provided,
        padding: '4px 6px',
        cursor: 'pointer',
        backgroundColor: isSelected ? 'rgb(146, 172, 255)' : isFocused ? 'rgba(86, 120, 229, .9)' : 'transparent'
      }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#ffffff'
    }),
    input: (provided, state) => ({
        ...provided,
        color: '#ffffff'
    }),
    menu: (provided, state) => ({
        ...provided,
        background: 'rgb(7, 5, 10)'
    }),
}


export default function AdvancedSelect(props) {
    return (
        <Select
            className={css.select}
            classNamePrefix="select"
            styles={styles}
            {...props}
        />
    )
}