import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
// <<<<<<< HEAD
import Sponsore from './pages/SponsorePage/Sponsore';
// =======
import HomePage from './pages/HomePage/HomePage';
// import Team from './pages/Team';
// >>>>>>> 56519cf2b1c3a1e7e39dbcd17d300c93d63d75cb

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
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
