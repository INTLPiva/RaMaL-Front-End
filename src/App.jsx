import 'regenerator-runtime/runtime';
import React from 'react';

import * as pdfjs from 'pdfjs-dist';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import GlobalStyle from './styles/global';

import 'pdfjs-dist/build/pdf.worker.entry';

import 'react-toastify/dist/ReactToastify.css';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.WorkerSrc;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
