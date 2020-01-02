import React from 'react';

import Header from './components/Header';
import Main from './pages/main';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Header />
      <Login></Login>
    </div>
  );
}

export default App;
