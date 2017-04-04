import React from 'react'

export default class CurrentRound extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    if(this.props.currentRound){
      var 
      return(
        <div className="current-round">
          <p>{this.props.currentRound}</p>
        </div>
      )
    }
  }

}
