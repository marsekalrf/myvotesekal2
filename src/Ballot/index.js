import React from 'react'
import BallotVote from './components/BallotVote'
import ModalConfirmation from '../Assets/ModalConfirmation'

class Ballot extends React.Component {
  constructor(){
    super()
    this.state = {
      isOpen : false
    }
    this.onClick = this.onClick.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onClick(){
    console.log("is clicked")
    this.setState({isOpen : true})
  }

  onClose(){
    console.log("was closed")
    this.setState({isOpen : false})
  }

  render(){
    return(
      <div>
      <div class="row" style={{"margin" : "3em"}}>
       <BallotVote onClick={this.onClick}/>
       <BallotVote onClick={this.onClick}/>
       <BallotVote onClick={this.onClick}/>
      </div>
      <ModalConfirmation isOpen={this.state.isOpen} onClose={this.onClose}/>
      </div>
    )
  }
}

export default Ballot
