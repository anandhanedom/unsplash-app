import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

//Pages
import AuthenticationPage from './pages/auth/auth.component.jsx';
import ImagesPage from './pages/images/images.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ImagesPage}></Route>
        <Route exact path="/auth" component={AuthenticationPage}></Route>
        <Route path="*" component={() => <h1>404 Not Found !</h1>} />
      </Switch>
    </div>
  );
}

// comment

export default App;
