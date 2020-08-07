import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './container/Main';
import About from './container/About';
import Counter from './container/Counter';
import Login from './container/Login';
import NotFound from './container/NotFound';

const App = () => {
  const isAdmin = true;
  return (
    <Router>
      <header>
        <Link to="/">main</Link> | <Link to="/about">about</Link> | <Link to="/counter">counter</Link> | <Link to="/login">login</Link>
      </header>
      <hr/>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/login" component={Login} />

          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
