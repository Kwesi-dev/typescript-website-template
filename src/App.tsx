import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Promopage from './pages/promopage/Promopage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Home/>
        <Promopage/>
      </main>
    </div>
  );
}

export default App;
