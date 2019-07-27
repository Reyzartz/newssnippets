import React from 'react';
import HeadingColors from '../HeadingColor/HeadingColor'
import './Heading.css';

const Heading=(props)=>{
    let style={
        backgroundColor:`${HeadingColors(props.title)}`
    }
    return(
        <h1 className="title"
            style={style}
        >{props.title}{props.children}</h1>
    )
}
export default Heading;