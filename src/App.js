import React from 'react';
import './App.css';

import Button from './Button.jsx';
import withLoading from './withLoading.jsx';
import WrappedButton from './WrappedButton.jsx';

function App(props) {
  const handleClick = () => {
    console.log('button clicked')
  };
  
  const handleTestClick = () => {
    console.log('Test Button clicked')
  };

  const handleButtonClick = () => {
    console.log('Button clicked')
  };

  const button = <WrappedButton handleClick={handleClick}>Click me</WrappedButton>;
  const Test = withLoading(Button);
  const HtmlButton = withLoading((props) => <button onClick={props.handleClick}>{props.children}</button>);
  

  return (
    <div className="App">
      {button}
      <Test handleClick={handleTestClick}>Test button</Test>
      <HtmlButton handleClick={handleButtonClick}>Button</HtmlButton>
    </div>
  );
}

export default App;
