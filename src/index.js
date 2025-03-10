import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom';
import { store } from './Redux/store';
import {MantineProvider} from '@mantine/core';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <MantineProvider withGlobalStyles withNormalizeCSS>
         <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </MantineProvider>
        
    
);

// If you want to start measuring performance in your app, pass a function

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

