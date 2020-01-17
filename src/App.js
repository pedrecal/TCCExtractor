import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/main';
// import Login from './pages/login';

function App() {
  return (
    <Router>
      {/* {props.location.pathname !== '/login' ? <Header /> : null} */}
      <Header />
      <Main />
    </Router>
  );
}

export default App;
