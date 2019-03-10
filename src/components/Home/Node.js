import React from 'react';
import { connect } from 'react-redux'

import { getRootFolders, getSubFolders } from '../../ducks/temp';
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

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        click: false
    }
  }
  componentDidMount(){
    this.props.getRootFolderRequest();
  }

  handleClickedAndAddChild = e => {
    e.preventDefault();
    const { folder } = this.props;
    this.props.getSubFolderRequest(folder.name, folder.uniqueId);
    this.setState({
        click: !this.state.click
    });
  }

  render() {
    const { name, folder, subFolders } = this.props;
    console.log(subFolders.subFolder);
    return (
      <React.Fragment>
        <div className="node">
            <div onClick={this.handleClickedAndAddChild} className="node--expand"> 
              { this.state.click ? (
                <span>&nabla;</span>
                ) : (
                  <span>&#8883;</span>
                )
              }
            </div>
            <div className="node--select">
             {folder.name}
            </div>
        </div>
        {this.state.click === true && (
          <div>
            <ul>
              {subFolders.subFolder &&  makeData(subFolders.subFolder).map(obj => <li>{obj.name}</li>)}
            </ul>
        </div>
        )}
        
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
  subFolders: state.getIn(["temp","rootFolders", `${ownProps.id}`]).toJS()
  }
}

export default connect(
  mapStateToProps,
  {
    getRootFolderRequest: getRootFolders,
    getSubFolderRequest: getSubFolders
  }
)(Node);