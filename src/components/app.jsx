import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './NoteApp/noteApp.jsx';
import Login from './Login/login.jsx';

// Routing pages using Route, Switch and BrowserRouter.

function Application() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="">
            <App></App>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Application;