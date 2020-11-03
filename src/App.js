import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalProvider } from 'react-simple-hook-modal';
import GlobalStyles from './components/GlobalStyles';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-simple-hook-modal/dist/styles.css';

function App() {

  return (
        <BrowserRouter>
          <GlobalStyles/>
          <ModalProvider>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>            
          </ModalProvider>
          <ToastContainer />
        </BrowserRouter>
  );
}

export default App;
