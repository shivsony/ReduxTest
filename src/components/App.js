import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Main from "./Main";
import Header from "./Header/Header";
import { requestAction } from "../ducks/temp"
import "./App.css";

const theme = createMuiTheme({
  // TODO after getting the standards from design team
  typography: {
    fontFamily: '"Montserrat",Roboto,"Helvetica Neue",Arial,sans-serif',
    // fontWeightMedium: 500,
    body1: {
      // fontWeight: 500,
    },
    subheading: {
      // fontSize: 12,
    },
    button: {
      // fontStyle: 'italic',
    }
  }
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }
  componentDidMount() {
    this.props.request();
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Header />
          <Main />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    request: requestAction
  }
)(App);
