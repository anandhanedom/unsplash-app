import React from 'react';
import './App.css';

//Components
import Header from './components/Header/Header.component.jsx';
import ImagePage from './pages/ImagePage/ImagePage.component.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <ImagePage />
    </div>
  );
}

export default App;
