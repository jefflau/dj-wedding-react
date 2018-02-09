import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header className="header">
    <h1 className="logo">Dianna and Jonathan</h1>
    <div className="date-location">
      <span className="date">10 Nov 2014</span>
      <span className="location">Phuket, Thailand</span>
    </div>
    <nav className="main-nav">
      <ul>
        <li className="toggle-menu"><a href="#0"><i className="fa fa-bars"></i></a></li>
        <li><Link activeClassName="active" to="/">Home</Link></li>
        <li><Link activeClassName="active" to="/venue-dress-code">Venue &amp; Dress Code</Link></li>
        <li><Link activeClassName="active" to="/schedule">Wedding Events Schedule</Link></li>
        <li><Link activeClassName="active" to="/accommodations">Accommodations</Link></li>
        <li><Link activeClassName="active" to="/meal-choices">Meal Choices</Link></li>
        <li><Link activeClassName="active" to="/welcome-dinner">Welcome Dinner</Link></li>
        <li><Link activeClassName="active" to="/information-phuket">Information on Phuket</Link></li>
        <li><Link activeClassName="active" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)
export default Header
