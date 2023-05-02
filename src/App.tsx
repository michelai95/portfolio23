import React from 'react';
import './App.css';
import Title from "./components/Title";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import Panel from "./components/Panel";

function App() {

  return (
    <div className="App">
      <div className="App-body">
          <header className="App-header">
            <Title />
            <Subtitle />
          </header>
        <section className='Banner'>
        <div className='Navigation'>
          <Panel />
        </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;