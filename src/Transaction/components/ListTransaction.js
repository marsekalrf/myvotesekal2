import React from 'react';
import {Link} from 'react-router-dom';
import Style from '../css/styletransaction.css';

class ListTransaction extends React.Component {
    constructor(props){
     super(props);
     this.state = {
        accounts : []
     }
    }

  render(){
    console.log(this.state.accounts.slice())
    return(
      <section id="transaction">
            <head>
                <meta charset="utf-8"/>
                <title>Transaction Table</title>
            </head>
            <body>
                <div class="container roomy-150">
                    <div class="table-responsive-vertical roomy-40">
                        <table class="table table-bordered table-hover table-mc-blue">
                            <thead>
                                <tr>
                                    <th>Tx Hash</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>From</th>
                                    <th>To</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="../TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Marsekal</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">24 secs ago</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="../TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Eko</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">24 secs ago</td>
                                    <td data-title="To">0x16296a795c713d/</td>

                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="./TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Raka</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">0x16296a795c713d/</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="/TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Alifia</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">0x16296a795c713d/</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="/TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Yunus</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">x16296a795c713d/</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="/TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Budi</td>
                                    <td data-title="Age">24 sec ago</td>
                                    <td data-title="From">0x16296a795c713d/</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                                <tr>
                                    <td data-title="Tx Hash"><Link to="/TransactionDetail">$apr1$12345678$</Link></td>
                                    <td data-title="Name">Umam</td>
                                    <td data-title="Age">A24 secs ago</td>
                                    <td data-title="From">0x16296a795c713d/</td>
                                    <td data-title="To">0x16296a795c713d/</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </body>
          </section>
    )
  }
}

export default ListTransaction
