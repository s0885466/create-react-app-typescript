import React from 'react';
import './App.css';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module4 from "./modules/Module4";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Module1/>
        <Module2/>
        <Module4/>
      </header>
    </div>);
};

export default App;
