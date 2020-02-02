import React from 'react';
import './App.css';
import Header from './components/Header'

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
      <Footer />
    </div>
  );
}

export default App;
