import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import ImagesPage from './Pages/ImagesPage/ImagesPage.component.jsx';
import SignIn from './Pages/Authentication/SignIn/Signin.component.jsx';
import SignUp from './Pages/Authentication/SignUp/Signup.component.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/images" component={ImagesPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
