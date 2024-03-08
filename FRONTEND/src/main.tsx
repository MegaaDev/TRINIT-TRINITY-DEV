import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
      <Toaster/>
    </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
