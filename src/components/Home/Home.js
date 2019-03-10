import React from 'react';
import { connect } from 'react-redux'

import { getRootFolders } from '../../ducks/temp';
import MainButton from "../MainButton/MainButton";
import MainTable from "../MainTable/MainTable";
import Node from "./Node";
import "./Home.css";

const makeData = object => {
  const array = [];
  for(let key in object) {
    array.push({
      name: key,
      ...object[key]
    })
  }
  return array;
} 

class Home extends React.Component {
  constructor(props){
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }
  componentDidMount() {
    this.props.getRootFolderRequest()
  }
  handleOnclick = (parent, child) => {
    console.log(parent, child);
  }
  render(){
    const { folders } = this.props;
    return (
      <div className="home">
          <h1>this is Taskinetics</h1>
          <div className="home-body">
            {/* <MainTable /> */}
            <div className="tree">
              {makeData(folders).map((obj,i) => {
                return <Node id={obj.name} folder={obj} handleOnclick={this.handleOnclick} key={i} />
              })}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  folders: state.getIn(["temp","rootFolders"]).toJS()
})

export default connect(
    mapStateToProps,
    {
      getRootFolderRequest: getRootFolders
    }
)(Home);
