import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Loading from './components/Loading-Animation/Loading';

import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';

// page to show all departments
import EventsPage from './pages/EventsPage/EventsPage';
// page to show all events in one department
import Events from './pages/Events/Events';
// page to show one event
import EventMainPage from './pages/EventMainPage/EventMainPage';

import Sponsor from './pages/SponsorePage/Sponsore';
import OurTeam from './pages/OurTeam/OurTeam';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading === false ? (
        <Router>
          <NavBar />
          <Switch>
            {/* about */}
            <Route path="/about">
              <About />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            {/* contect */}
            <Route path="/contact">
              <ContactPage></ContactPage>
            </Route>

            <Route path="/sponsor">
              <div>
                <Sponsor />
              </div>
            </Route>

            <Route path="/team">
              <OurTeam />
            </Route>

            {/* Events Page */}
            <Route path="/events" exact>
              <EventsPage />
            </Route>

            <Route path="/departments/:department">
              <Events />
            </Route>

            <Route path="/events/:event" exact>
              <EventMainPage />
            </Route>

            {/* Homepage */}
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
          <Footer />
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
