import React from 'react'

export default class CurrentRound extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    if(this.props.currentRound){

      var roundMap = this.props.currentRound.map

      return(
        <div className="current-round">
          <h3>Current Round</h3>
          <ul>

          </ul>
          <h3>Total: £{this.props.total}</h3>
        </div>
      )
    }
  }

}
