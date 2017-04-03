import React from 'react'

export default class PubSelector extends React.Component{

  constructor(props){
    super(props)

    this.state = { selectedIndex: undefined }

    this.handlePubChange = this.handlePubChange.bind(this)
  }

  render(){
    var pubMap = this.props.pubChoices.map(function(pub, index){
      return <option key={index}>{pub.pubName}</option>
    })

    return(
      <select classID="pub-selector" onChange={this.handlePubChange} value={this.state.selectedIndex}>
        {pubMap}
      </select>
    )
  }

  handlePubChange(event){
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});

    var selectedPub = this.props.pubChoices[newIndex];
    this.props.didSelectPub(selectedPub);
  }
}
