import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProblemsDetails from './components/problems/ProblemsDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProblems from './components/problems/CreateProblems'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/problem/:id' component={ProblemsDetails} />
            <Route path='/entrar'component={SignIn} />
            <Route path='/cadastrar'component={SignUp} />
            <Route path='/criar'component={CreateProblems} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
