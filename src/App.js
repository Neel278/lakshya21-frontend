import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading-Animation/Loading';
import ContactPage from './pages/ContactPage/ContactPage';
// <<<<<<< kaushik
// import Sponsore from './pages/SponsorePage/Sponsore';
import HomePage from './pages/HomePage/HomePage';
// =======
// import EventsPage from './pages/EventsPage/EventsPage';
import Events from './pages/Events/Events';
import Sponsore from './pages/SponsorePage/Sponsore';
import OurTeam from './pages/OurTeam/OurTeam';
// import HomePage from './pages/HomePage/HomePage';
import EventMainPage from './pages/EventMainPage/EventMainPage';
// >>>>>>> main

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Router>
          <NavBar />
          <Switch>
            {/* contect */}
            <Route path="/contact">
              <div className="container">
                <ContactPage />
              </div>
            </Route>

            <Route path="/sponsor">
              <div>
                <Sponsore />
              </div>
            </Route>

            {/* about */}
            {/* <Route path="/about">
          <h1>about</h1>
        </Route> */}
            {/* about */}
            <Route path="/team">
              <OurTeam />
            </Route>

            <Route path="/events-main">
              <EventMainPage />
            </Route>
            {/* <Route path="/events-main">
               <Events />
             </Route> */}

            {/* Events Page */}
            <Route path="/events">
              <Events />
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
    // >>>>>>> main
  );
}

export default App;
