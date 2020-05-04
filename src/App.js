import React from 'react';
import Header from './Header';

import './App.css';
import Counter from './Counter';

// function
function App() {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        {/* Header Component */}
        {/* <Header></Header> */}
        <Header headertext="Counter Example" />
        <Counter />
      </header>
    </div>
  );
}

export default App;


// Class component syntax: for App
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* JSX goes here */}
//       </div>
//     )
//   }
// }