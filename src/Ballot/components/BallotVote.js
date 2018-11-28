import React from 'react'

class BallotVote extends React.Component {
  constructor(){
  super()

  this.onClicked = this.onClicked.bind(this)
  }

  onClicked(){
    this.props.onClick()
  }
  render(){
    return (
      <div class="col-md-4">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="card profile-card-3">
          <div class="background-block">
              <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
          </div>
          <div class="profile-thumb-block">
              <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile"/>
          </div>
          <div class="card-content">
              <h2>Justin Mccoy<small>Designer</small></h2>
              <div class="icon-block"><button class="btn btn-primary btn-block text-uppercase" onClick={this.onClicked} >Vote Me</button></div>
          </div>
      </div>
      </div>
    )
  }
}

export default BallotVote
