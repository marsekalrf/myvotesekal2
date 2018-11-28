import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Ballot from './Ballot'
import AddCandidate from './AddCandidate'
import Transaction from './Transaction'
import LoginCard from './Home/components/LoginCard'
import ModalConfirmation from './Assets/ModalConfirmation'
import { BrowserRouter as Router,
		 Route,
		 Link } from 'react-router-dom';

class App extends Component {
  render() {
    const routes = [
      {
        path : "/Ballot",
        exact : true,
        main : () => <Ballot />
      },
			{
				path : "/Transaction",
				exact : true,
				main : () => <Transaction />
			},
      {
        path : "/Add-Candidate",
        exact : true,
        main : () => <AddCandidate />
      },
      {
        path : "/Login",
        exact : true,
        main : () => <LoginCard />
      },
    ]
    return (
      <Router>
        <div className="App">
          <Home />
          {routes.map((route, map)=>(
            <Route
             path= {route.path}
             exact= {route.exact}
             component = {route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
