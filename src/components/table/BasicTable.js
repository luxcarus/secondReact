import React from 'react'
import {connect} from 'react-redux'
class BasicTable extends React.Component {
  render(){
    return(
      <div>
        <table className="striped responsive-table">

          <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Url</th>
                <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>    
      </div>
    )
  }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(onClick())
    }
}
BasicButton = connect(undefined, mapDispatchToProps)(BasicButton);