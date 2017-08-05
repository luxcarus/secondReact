import React from 'react';
// import {connect} from 'react-redux'

export class BasicButton extends React.Component {
  render() {
    return (
      // <div className="">
        <button style={this.props.style} className="waves-effect waves-light btn" onClick={this.props.onClick}>{this.props.options.name}</button>
      // </div>
    );
  }
}

// mapStateToProps
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onClick: () => dispatch(onClick())
//     }
// }
// BasicButton = connect(undefined, mapDispatchToProps)(BasicButton);