import React, { Component } from 'react';
const css = require('./HeroPortrait.module.css');

const Styles = {
    SQUARE: 'square',
    CIRCLE: 'circle',
    HEXAGON: 'hexagon'
};

export default function HeroPortrait(props) {
    const { name, size, style, label, header, children } = props;

    const sizeCss = size ? css[size] : css.md;

    const bgStyle = { backgroundImage: `url('/images/heroes/${name}.png')`};
 
    return (
        <div style={bgStyle} className={`${sizeCss} ${css.heroPortrait}`}>
             {children ? children : null}
             {label ? <span className={css.label}>{label}</span> : null}
        </div>
    );
    
}