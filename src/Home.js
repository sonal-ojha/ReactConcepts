import React from 'react';
// import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Counter from './Counter';
import Form from './Form';

import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';

// object destructing
// const obj = {
//   name: 'sonal',
//   age: 23,
//   addr: 'Hyd',
// };
// const { name, age } = obj;
// output of name will bve 'sonal'

// Array destructre
// const [ firstItem , secondItem ] = ['one', 'two', 'dfghj'];
// firstItem will be assigned the first index value from array = 'one'

export const ABoutPath = "/about";

export function About() {
  return (
    <div>
      All About us!!
      JsFactory Classes
    </div>
  )
}

function Contact() {
  return (
    <div>
      <div>JsFactory.com</div>
      <div>send an enquiry to get complete information</div>
    </div>
  )
}

function AllConcepts() {
  return (
    <div>
      <hr />
      <div>
        React advance concepts today !!
      </div>
      <Header headertext="How to use seState using Example" />
      <hr />
      <Counter />
      {/* State Uplift */}
      <Form />
    </div>
  )
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <hr />
        {/* Routing */}
        <h2>Routing Concepts</h2>
        <Router>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/concepts">Concepts</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={ABoutPath} component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/concepts" component={AllConcepts} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Home;