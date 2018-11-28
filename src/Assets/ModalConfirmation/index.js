import React from 'react'
import BootstrapModal from './components/BootstrapModal'

export default class ModalConfirmation extends React.Component {
	render(){
		return(
			<BootstrapModal isOpen={this.props.isOpen} onClose={this.props.onClose}/>
		)
	}
}