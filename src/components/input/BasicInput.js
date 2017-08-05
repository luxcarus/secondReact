import React from 'react';

export class BasicInput extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      id:performance.now(),
      placeHolder : this.props.options.placeHolder
    }
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col l12 s12">
          <input defaultValue="" id={this.state.id} type="text" className="validate"></input>
          <label className="active" htmlFor={this.state.id}>{this.state.placeHolder}</label>
        </div>
      </div>
    );
  }
}