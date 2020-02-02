import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

/* APP -> Header
       -> Home (main) -> Search
                      -> Quotes
                      -> History
                      -> News
       -> Footer 


*/

function App() {
  return (
    <div className="App">
      <Header />

      <main>

        <Route exact path="/" component={Home} />

      </main>

      <Footer />
    </div>
  );
}

export default App;
