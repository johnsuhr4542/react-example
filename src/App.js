import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './container/Main';
import About from './container/About';
import Counter from './container/Counter';
import NotFound from './container/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">main</Link> | <Link to="/about">about</Link> | <Link to="/counter">counter</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/counter" component={Counter} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
