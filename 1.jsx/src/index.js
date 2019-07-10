// import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'click me ';
}

// create react component
const App = () => {
  const labelText = 'enter name: ';
  const buttonStyle = {
    border: 'solid 1px black',
    backgroundColor: 'blue',
    color: 'white',
  };
  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input
        id="name"
        type="text"
        style={{ backgroundColor: 'blue', color: 'white' }}
      />
      <button style={buttonStyle}>{getButtonText()}</button>
    </div>
  );
};

// return nya udah jadi object.
console.log(<App />);

// masih mentah atau function
console.log(App);

// jadi untuk menjadi component kudu pake <>

// take the component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
