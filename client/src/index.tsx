import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from 'src/redux_store';
import { Provider } from 'react-redux';
import GlobalDndContext from './dnd-context';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalDndContext>
      <CssBaseline />
      <GlobalStyles styles={{
        "*": {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
          outline: 'none',
          border: 'none',
          textDecoration: 'none',
        }
      }} />
      <BrowserRouter>

        <App />
      </BrowserRouter>
      <Toaster position="top-center" />
    </GlobalDndContext>
  </Provider>
);
