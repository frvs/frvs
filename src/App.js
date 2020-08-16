import React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';
import Blog from './pages/Blog';
import Opensource from './pages/Opensource';
import Home from './pages/Home';
import Experience from './pages/Experience';

function App() {
  return (
    <main>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/opensource" component={Opensource} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </Layout>
    </main>
  );
}

export default App;
