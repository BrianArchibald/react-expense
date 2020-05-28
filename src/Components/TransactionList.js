import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); //grabbing global state to use here

// bringing in transactions from GlobalContext, then mapping over them to display as a list
    return (
      <>
        <h3>History</h3>
        <ul className="list">
          { transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} 
        </ul>
      </>
    )
}
