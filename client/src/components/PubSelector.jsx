import React from 'react'

export default class PubSelector extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    var pubMap = this.props.pubChoices.map(function(pub, index){
      return <option key={index}>{pub.pubName}</option>
    })

    return(
      <select classID="pub-selector">
        {pubMap}
      </select>
    )
  }
}
