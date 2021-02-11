import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountInfo from './Components/AccountInfo';
import Nav from './Components/Nav';
import Home from './Components/Home';
import DailyRoutine from './Components/DailyRoutine';

function App() {

  const [apiKey, setApiKey] = useState('8D1B75E3-1CC1-1040-BECE-9E3647D5CBD37EEDBEE7-343A-45F5-84F8-66310EC19A44');

  return (
      <Router>
        <div className="App">
          <Nav
            setApiKey={setApiKey}
            apiKey={apiKey}
          />

          <main className="App__MainSection">
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/info'>
                <AccountInfo apiKey={apiKey} />
              </Route>
              <Route path='/dailyRoutine'>
                <DailyRoutine />
              </Route>
            </Switch>
          </main>

        </div>
      </Router>
  );
}

export default App;
