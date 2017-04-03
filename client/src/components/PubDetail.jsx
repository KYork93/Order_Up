import React from 'react'
import DrinkDetails from './DrinkDetails'

export default class PubDetail extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
      if(!this.props.pubDetail){
      return (<h2>No Pub Selected</h2>)
      }
      return(
        <div className="pub-detail">

        </div>
      )

    }
}
