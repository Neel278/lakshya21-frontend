import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import Sponsore from './pages/SponsorePage/Sponsore';
import HomePage from './pages/HomePage/HomePage';
// <<<<<<< HEAD
import Events from './pages/Events/Events';
// =======
// >>>>>>> fd6afce907bc2a88dcedb32ade4eec4ced3258b8
// import Team from './pages/Team';

function App() {
  return (
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
        {/* <Route path="/team"> */}
        {/* <Team /> */}
        {/* </Route> */}

        {/* Homepage */}
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>

        {/* Events Page */}
        <Route path="/events">
          <Events />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
