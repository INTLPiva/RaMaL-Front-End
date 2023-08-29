import 'regenerator-runtime/runtime';
import React from 'react';

import * as pdfjs from 'pdfjs-dist';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import GlobalStyle from './styles/global';

import 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.WorkerSrc;

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
export default App;
