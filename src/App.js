import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

//Pages
import AuthenticationPage from './pages/auth/auth.component.jsx';
import ImagesPage from './pages/images/images.component.jsx';

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
          <Route exact path="/" component={ImagesPage}></Route>
          <Route exact path="/auth" component={AuthenticationPage}></Route>
          <Route path="*" component={() => <h1>404 Not Found !</h1>} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

// comment

export default App;
