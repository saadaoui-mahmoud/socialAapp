import React from 'react'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div >
      <React.StrictMode>
        <Router>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
            
          <Route path="/Profile">
            <Profile />
          </Route>
        </Router>


      </React.StrictMode>
    </div>
  );
}

export default App;
