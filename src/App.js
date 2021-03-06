import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './styles/App.css';
import './styles/Header.css';
import './styles/Login.css';
import './styles/Wallet.css';
import './styles/Form.css';
import './styles/ExpenseTable.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/carteira">
        <Wallet />
      </Route>
    </Switch>
  );
}

export default App;
