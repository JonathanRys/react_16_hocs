import React from 'react';
import withLoading from './withLoading.jsx';

const Button = (props) => {
    return (<button onClick={props.handleClick}>{props.children}</button>);
}

export default withLoading(Button);
