import React from 'react'
import ListTransaction from './components/ListTransaction'
import TransactionDetail from './components/TransactionDetail'
import Style from './css/styletransaction.css';

class Transaction extends React.Component {
  render(){
    return (
      <div class="container">
        <ListTransaction />
        <TransactionDetail />
      </div>
    )
  }
}

export default Transaction
