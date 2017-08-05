import React from 'react'
import {BasicInput} from '../../components/input'
import {BasicButton} from '../../components/button'
// import {http} from '../../utils'

export class BasicForm extends React.Component {

  constructor(props){
    super(props)
    this.options1 = {
      placeHolder:"FIRST-NAME"
    }
    this.options2 = {
      placeHolder:"LAST-NAME"
    }

    this.btn1 = {
      name:"Sign in"
    }
    this.btn2 = {
      name:"Sign up"
    }
    this.rightBtn = {
      marginLeft:'32px'
    }
  }

  signIn(that){
    if( that.http().isAuthorized ){
      alert('hello! :)')
    }else{
      alert('Who are you? :(')
    }
  }

  http(){
    return {isAuthorized:true}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-field col l12 s12">
            <BasicInput options={this.options1}></BasicInput>
            <BasicInput options={this.options2}></BasicInput>
          </div>
        </div>
        <div className="row">
          <div className="col l12 s12">
            <BasicButton onClick={()=>{this.signIn(this)}} className="btn" options={this.btn1}></BasicButton>
            <BasicButton style={this.rightBtn} classNAme="btn" options={this.btn2}></BasicButton>
          </div>
        </div>
      </div>
    )
  }
}