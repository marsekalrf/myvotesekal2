import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding         : '0',
    transform             : 'translate(-50%, -50%)',
    overflow    : "auto",
    position   : "absolute"
  }
};


class BootstrapModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : "",
      id : null
    }
    this.onClick = this.onClick.bind(this)
  }

  onClickVote(e){

  }

  onClick(){
    console.log("closed")
    this.props.onClose()
  }

  render() {
    //let {dispatch} = this.props
    return (
      <Modal
        isOpen={this.props.isOpen}
        contentLabel="Minimal Modal Example"
        style={customStyles}
        overlayclassName="modal-content"
      >
      <div>
      <div class="modal-header">
       <h5 class="modal-title">Modal title</h5>
       <button class="close" data-dismiss="modal" aria-label="Close" onClick={this.onClick}>
        <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div class="modal-body" id="wkwk">
      {this.state.name}
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-primary">Save changes</button>
       <button onClick={this.onClick} type="button" class="btn btn-secondary">Close</button>
      </div>
    </div>
    </Modal>
    );
  }
}

export default BootstrapModal