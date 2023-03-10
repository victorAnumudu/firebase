import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

import Router from './Router';
import NavBs from './component/NavBs';

function App() {
  let location = useLocation()
  // let [isLogin, setIsLogin] = useState(false)

  return (
    <div className='container'>
      {(location.pathname == '/login' || location.pathname == '/signup') ? <></> : <NavBs />}
      <Router />
    </div>
  );
}

export default App;

// nav on error page check
