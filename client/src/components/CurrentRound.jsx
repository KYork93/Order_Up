import React from 'react'

export default class CurrentRound extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <p>{this.props.currentRound}</p>
      </div>
    )
  }

}
