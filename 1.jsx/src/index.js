// import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
  return <div> Hi Hisyam! </div>;
};

// return nya udah jadi object.
console.log(<App />);

// masih mentah atau function
console.log(App);

// jadi untuk menjadi component kudu pake <>

// take the component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
