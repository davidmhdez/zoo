import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ModalProvider } from 'react-simple-hook-modal';
import GlobalStyles from './components/GlobalStyles';
import Dashboard from './views/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-simple-hook-modal/dist/styles.css';
import Page404 from './views/404';

function App() {

  return (
        <BrowserRouter>
          <GlobalStyles/>
          <ModalProvider>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/not-found" component={Page404}/>
                <Redirect to="/not-found"/>
            </Switch>            
          </ModalProvider>
          <ToastContainer />
        </BrowserRouter>
  );
}

export default App;
