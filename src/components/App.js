import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Main from "./Main";
import Header from "./Header/Header";
import "./App.css";


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
