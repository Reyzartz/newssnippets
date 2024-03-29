import React from 'react';

const withClass = (props) => (
    <div className={props.addClass}>
        {props.children}
    </div>
); 
    
export default withClass;