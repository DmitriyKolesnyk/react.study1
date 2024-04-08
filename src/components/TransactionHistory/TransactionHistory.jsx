import React from 'react';
import css from "../TransactionHistory/TransactionHistory.module.css"
const TransactionHistory =({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.head}>
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
            </thead>

            <tbody>
            {items.map(item => (
                <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>))}
            </tbody>
            </table>)}
export default TransactionHistory;


