import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';
import UserContextProvider from './Context/UserContextProvider.tsx';

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
