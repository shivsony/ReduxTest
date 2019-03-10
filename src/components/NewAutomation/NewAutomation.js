import React from 'react';
import { connect } from "react-redux";
import { Form, Field } from 'react-final-form';

import "./NewAutomation.css";

const List = ({children}) => (
  <div>
    <ul>
      <li>
        {children}
      </li>
    </ul>
  </div>
)

class NewAutomation extends React.Component {
  constructor(props){
    super(props);
    this.state = { validated: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleSubmit(values) {
    //console.log(values);
  }
  validate(values) {
    //console.log(values);
    const errors = {}
    if(!values.bio) {
      errors.bio = "mandatory"; 
    }
    return errors;
  }

  render() {
    const bio = {bio:"MyBio"};
    const { data } = this.props;
    debugger
    console.log(data);
    return (
      <div className="wrapper">
        <Form
          onSubmit={this.handleSubmit}
          validate={this.validate}
          initialValues={bio}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="bio"
                type="text"
                component="input"
              />
              <button type="submit">
                Submit
              </button>
            </form>
          )}
        />
        <div>
          <List>
            <List>hello
              <List>sefdfd
                <List>sdsadfsdswdd</List>
              </List>
            </List>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.get("temp").toJS()
})

export default connect(
  mapStateToProps,
  null
)(NewAutomation);
