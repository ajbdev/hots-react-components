import React, { Component } from 'react';
const css = require('./HeroPortrait.module.css');

const Styles = {
    SQUARE: 'square',
    CIRCLE: 'circle',
    HEXAGON: 'hexagon'
};

function classes(props) {
    const classes = [ props.size ? css[props.size] : css.md, css.heroPortrait ];

    if (props.hideBorder) {
        classes.push(css.noBorder)
    }

    return classes.join(' ');
}

export default function HeroPortrait(props) {
    const { name, size, style, label, header, children } = props;

    const bgStyle = { backgroundImage: `url('/images/heroes/${name}.png')`};
 
    return (
        <div style={bgStyle} className={`${classes(props)}`}>
             {children ? children : null}
             {label ? <span className={css.label}>{label}</span> : null}
        </div>
    );
    
}