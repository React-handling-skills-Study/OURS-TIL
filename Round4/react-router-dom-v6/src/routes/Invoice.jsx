import React from 'react';
import { getInvoice, getInvoices } from '../data';
import {useParams} from 'react-router-dom'
const Invoice = () => {
  // invoices에서 to로 넘겨준 invoices/${invoice.number}. invoice.number 값이 useParam를 통해 params에 할당된다.
  let params = useParams();
  // url 매개변수는 항상 string이기에 parseInt를 통해 숫자로 변경.
  let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <main style={{padding: '1rem'}}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;