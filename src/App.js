import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import ImagesPage from './Pages/ImagesPage/ImagesPage.component.jsx';
import AuthenticationPage from './Pages/Authentication/AuthenticationPage.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AuthenticationPage}></Route>
        <Route exact path="/images" component={ImagesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
