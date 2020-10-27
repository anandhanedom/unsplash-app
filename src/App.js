import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Pages
import ImagesPage from './Pages/ImagesPage/ImagesPage.component.jsx';
import SignIn from './Pages/Authentication/SignIn/Signin.component.jsx';
import SignUp from './Pages/Authentication/SignUp/Signup.component.jsx';

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3DB46D',
        contrastText: '#fff',
      },
      secondary: {
        main: '#EB5757',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/images" component={ImagesPage}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
