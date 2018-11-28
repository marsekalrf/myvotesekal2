import React from 'react';
import { BrowserRouter as Router,
		 Route,
		 Link } from 'react-router-dom';

export default class LinkSub extends React.Component{
	render(){
		return(
		 <Route
		    path={this.props.to}
		    exact={this.props.activeOnlyWhenExact}
		    children={({ match }) => (
		      <li class="nav-item">
		        <Link to={this.props.to}><a class={match ? "nav-link active" : "nav-link"}>{this.props.label} <span class="sr-only">(current)</span></a></Link>
		      </li>
		    )}
		  />
		);
	}
}
