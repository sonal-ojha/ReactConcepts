import React from 'react';
import Home, { About } from './Home';

import './App.css';

// Dumb / presentational componenent 
function App() {
  return (
    <div className="App">
      <Home />
      <hr />
      {/* Import without using default */}
      {/* <About></About> */}
    </div>
  );
}

// Pure Components
// class Details extends React.PureComponent {

//   // special life cycle method
//   shouldComponentUpdate() { // returns true/false
//     // compores your state and props - shallow comparison
//   }

//   render() {
//     return(
//     )
//   }
// }

export default App;