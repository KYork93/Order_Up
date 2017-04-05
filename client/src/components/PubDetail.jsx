import React from 'react'

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
          <h1 className="pub-name">{this.props.pubDetail.pubName}</h1>
          <h3 className="pub-address">&nbsp;&nbsp;{this.props.pubDetail.pubAddress}</h3>
        </div>
      )
  }
}
