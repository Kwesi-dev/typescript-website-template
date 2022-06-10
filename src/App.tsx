import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainhome from './pages/main-home/Mainhome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Mainhome/>
      </main>
    </div>
  );
}

export default App;
