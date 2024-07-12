import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import useFetch from './hooks/useFetch';
import useSocket from './hooks/useSocket';
import CommonComponent from './components/common/commonComponent';

const App = () => {


  return (
    <Router>
      <Route path="/" Component={Home} />
      <CommonComponent />
    </Router>
  );
};

export default App;
