import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Sales from './pages/Sales'
import News from './pages/News'
import Delivery from './pages/Delivery'
import Contacts from './pages/Contacts'
import Books from './pages/Books'

import Header from './components/Header';
import Book from  './components/Book';

function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about-Us' component={AboutUs} />
        <Route path='/sales' component={Sales} />
        <Route path='/news' component={News} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/books/:id' component={Book} />
        <Route path='/books' component={Books} />
      </Switch>

    </React.Fragment>
  )
}
export default App;