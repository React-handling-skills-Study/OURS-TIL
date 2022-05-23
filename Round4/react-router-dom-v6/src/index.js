import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses'
import Invoice from './routes/Invoice';
import Invoices from './routes/invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
    <Route path="/expenses" element={<Expenses />} />

    <Route path="/invoices" element={<Invoices/>}>
      {/* 아무것도 선택하지 않고 Invoices를 선택했을 때 선택창을 보여줄 수 있게 만드는 index props */}
      {/* index path는 path props대신 사용한다. 즉 경로가 없다. */}
      {/* index path는 사용자가 탐색 목록의 항목 중 아무것도 선택하지 않았을 경우 렌더링된다. */}
      <Route index
      element={
        <main style={{padding: '1rem'}}>
          <p>Select an invoice</p>
        </main>
      }
      />
      <Route path=":invoiceId" element={<Invoice/>} />
    </Route>
    <Route path="*" element={<main style={{padding: '1rem'}}><p>There's nothing here!</p></main>} />
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

