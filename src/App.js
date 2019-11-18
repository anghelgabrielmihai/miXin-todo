import React from 'react';
import './App.css';
import { HeaderComponent } from './components/headerComponent/headerComponent';
import { MainComponent } from './components/mainComponent/mainComponent';

function App () {
  return (
    <div>
      <HeaderComponent title="Header" />
      <MainComponent />
    </div>
  );
}

export default App;
