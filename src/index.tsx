import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.module.scss';
import { Provider } from 'react-redux';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import  store ,{persister} from "./redux/store";


const rootElem =document.getElementById('root');
if(rootElem){

  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}



