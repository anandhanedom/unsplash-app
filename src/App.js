import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

//Pages
import AuthenticationPage from './pages/auth/auth.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthenticationPage}></Route>
        <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
      </Switch>
    </div>
  );
}

// comment

export default App;
