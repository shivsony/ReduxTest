import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Main from "./Main";

const Header = () => (
  <div>
    <p>header</p>
    <Link to="/home">go home</Link>
    <p>wow</p>
    <Link to="/">go initial</Link>
  </div>
)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App
