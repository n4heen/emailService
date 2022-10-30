import React from 'react';
import './Section.css'

const Section = ({Icon,title,color,selected}) => {
    return (
        <div className={`section ${selected && 'section--selected'}`}>
            
        </div>
    );
}

export default Section;
