import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router'
import App from './App';
import Home from './pages/Home';
import Venuedresscode from './pages/Venuedresscode';
import Schedule from './pages/Schedule';
import WelcomeDinner from './pages/WelcomeDinner';
import Accommodations from './pages/Accommodations';
import MealChoices from './pages/MealChoices';
import InformationPhuket from './pages/InformationPhuket';
import Contact from './pages/Contact';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/venue-dress-code" component={Venuedresscode} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/welcome-dinner" component={WelcomeDinner} />
      <Route path="/accommodations" component={Accommodations} />
      <Route path="/meal-choices" component={MealChoices} />
      <Route path="/information-phuket" component={InformationPhuket} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
