import React from 'react';
import './App.css';

//Components
import Header from './components/Header/Header.component.jsx';
import ImagePage from './pages/ImagePage/ImagePage.component.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3db46d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#eb5757',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ImagePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
