import React from 'react'

export default class CurrentRound extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    if(this.props.currentRound){

      if(this.props.currentRound.length > 1){
        this.props.currentRound.reduce((allDrinks, drink) => {
        if(drink in allDrinks){
            allDrinks[drink]++
        } else {
          allDrinks[drink] = 1
        }
          console.log(allDrinks)
        }, {})
      }

      var roundMap = this.props.currentRound.map((drink, index) => {
       return  <li key={index}>{drink}</li>
      })

      return(
        <div className="current-round">
          <h3>Current Round</h3>
          <ul>
            {roundMap}
          </ul>
          <h3>Total: £{this.props.total}</h3>
        </div>
      )
    }
  }

}
