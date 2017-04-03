import React from 'react'

export default class DrinkDetails extends React.Component{

  constructor(props){
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render(){

    if(!this.props.drinkDetail){
    return <p></p>
    }

    let drinksMap = this.props.drinkDetail.drinksMenu.map((drink, index) => {
      return(
        <div className="drink-detail" key={index}>
          <img src={drink.drinkSrc} />
          <h2>{drink.drinkName}</h2>
          <h3>{drink.price}</h3>
          <button>Add to Round</button>
        </div>
      )
    })

    return(
      <div className="drink-list">
        {drinksMap}
      </div>
    )
  }

}
