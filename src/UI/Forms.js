import React from 'react';
import css from './Forms.module.css'


function classes(props) {
    const classes = [];

    if (props.hasOwnProperty('size')) {
        classes.push(css[props.size]);
    }

    classes.push(css.button);

    return classes.join(' ');
}

export const Button = (props) => (
    <div className={classes(props)} {...props}>{props.children}</div>
);


export const Select = (props) => (
    <select className={css.select}>
        {props.children}
    </select>
);