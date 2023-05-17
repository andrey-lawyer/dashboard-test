import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter basename="/dashboard-test/"> */}
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
