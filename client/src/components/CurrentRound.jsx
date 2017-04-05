import React from 'react'

export default class CurrentRound extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    if(this.props.currentRound.length > 1){
      var reduced = this.props.currentRound.reduce((allDrinks, drink) => {
        if(allDrinks[drink]){
          allDrinks[drink]++
        } else {
          allDrinks[drink] = 1
        }
        return allDrinks
      }, {})

      var drinkAndNum = []
      for(var key in reduced){
        drinkAndNum.push(<li>{key} : {reduced[key]}</li>)
      }
    }
    return(
      <div className="current-round">
        <h3>Current Round</h3>
        <ul>
          {drinkAndNum}
        </ul>
        <h3>Total: £{this.props.total.toFixed(2)}</h3>
      </div>
    )
  }

}
