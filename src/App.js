import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountInfo from './Components/AccountInfo';
import Profile from './Components/Profile';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {

  const [apiKey, setApiKey] = useState('');

  return (
      <Router>
        <div className="App">
          <Nav
            setApiKey={setApiKey}
            apiKey={apiKey}
          />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/info'>
              <AccountInfo apiKey={apiKey} />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
