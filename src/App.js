import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import NavBar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import Sponsore from './pages/SponsorePage/Sponsore';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        {/* contect */}
        <Route path="/contact">
          <div className="container">
            <ContactPage />
          </div>
        </Route>

        <Route path="/sponsore">
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
        {/* <Route exact path="/">
          <h1>homepage</h1>
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
