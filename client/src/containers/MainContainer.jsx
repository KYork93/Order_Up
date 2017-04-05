import React from 'react'
import PubSelector from '../components/PubSelector'
import PubDetail from '../components/PubDetail'
import DrinkDetails from '../components/DrinkDetails'
import CurrentRound from '../components/CurrentRound'

export default class MainContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      pubs: [
        {
          id: 1,
          pubName: 'Lebowskis',
          pubAddress: '18 Morrison St, Edinburgh EH3 8BJ',
          pubSrc: 'http://farm7.static.flickr.com/6209/6128315560_f2fd0abf4a.jpg',
          drinksMenu: [{
            id: 1,
            drinkName: 'White Russian',
            drinkSrc: 'http://www.kahlua.com/globalassets/classic-cocktails/white-russian/kahlua-white-russian-highlighted.png/CocktailHighlight',
            price: 6.99
          },
          {
            id: 2,
            drinkName: 'Budweiser',
            drinkSrc: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/creativereview/prod/content/uploads/2016/01/2011budweiser-can.jpg',
            price: 4.49
          }]
        },
        {
          id: 2,
          pubName: 'Paradise Palms',
          pubAddress: '41 Lothian St, Edinburgh EH1 1HB',
          pubSrc: 'http://files.stv.tv/imagebase/300/605x454/300373-paradise-palms-lothian-street.jpg',
          drinksMenu: [{
            id: 1,
            drinkName: 'Buckfast Daiquiri',
            drinkSrc: 'https://pbs.twimg.com/media/CIljQtVWcAA-PMg.jpg',
            price: 7.99
          },
          {
            id: 2,
            drinkName: 'Blue Moon',
            drinkSrc: 'https://s-media-cache-ak0.pinimg.com/564x/77/62/50/7762508f14ff19acfc75b4a249f29d35.jpg',
            price: 4.49
          }]
        }],
      focusPub: null,
      drinksRound: [],
      totalPrice: 0
    }

    this.selectedPub = this.selectedPub.bind(this)
    this.addDrinkToRound = this.addDrinkToRound.bind(this)
    this.startAgain = this.startAgain.bind(this)
  }

  render(){
    return(
      <div className="main-container">
        <CurrentRound currentRound={this.state.drinksRound} total={this.state.totalPrice} removeRound={this.startAgain}/>
        <PubSelector pubChoices={this.state.pubs} didSelectPub={this.selectedPub} />
        <PubDetail pubDetail={this.state.focusPub} />
        <DrinkDetails drinkDetail={this.state.focusPub} addDrink={this.addDrinkToRound}/>
      </div>
    )
  }

  selectedPub(pub){
    this.setState({focusPub: pub})
    this.startAgain()
  }

  addDrinkToRound(drinkName){
    let map = this.state.pubs.map((pub) => {
      pub.drinksMenu.map((drink) => {
        if(drink.drinkName === drinkName){
          this.setState({
            totalPrice: this.state.totalPrice + drink.price
          })
        }
      })
    })

    this.setState({
      drinksRound: this.state.drinksRound.concat([drinkName])
    })
  }

  startAgain(){
    this.setState({drinksRound: []})
    this.setState({totalPrice: 0})
  }
}
