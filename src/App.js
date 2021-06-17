import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
<<<<<<< HEAD
// <<<<<<< HEAD
import Sponsore from './pages/SponsorePage/Sponsore';
// =======
import HomePage from './pages/HomePage/HomePage';
// import Team from './pages/Team';
// >>>>>>> 56519cf2b1c3a1e7e39dbcd17d300c93d63d75cb
=======
// import Team from './pages/Team';
>>>>>>> 07ff9013928fbee2392f85e9cdcead56dfd3916b

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
<<<<<<< HEAD
=======
        {/* loginPage */}
        {/* <Route path="/login">
          <h1>Login Page</h1>
        </Route> */}

>>>>>>> 07ff9013928fbee2392f85e9cdcead56dfd3916b
        {/* contect */}
        <Route path="/contact">
          <div className="container">
            <ContactPage />
          </div>
        </Route>

<<<<<<< HEAD
        <Route path="/sponsore">
          <div>
            <Sponsore />
          </div>
        </Route>

=======
>>>>>>> 07ff9013928fbee2392f85e9cdcead56dfd3916b
        {/* about */}
        {/* <Route path="/about">
          <h1>about</h1>
        </Route> */}

        {/* about */}
        {/* <Route path="/team"> */}
        {/* <Team /> */}
        {/* </Route> */}

        {/* Homepage */}
<<<<<<< HEAD
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
=======
        {/* <Route exact path="/">
          <h1>homepage</h1>
        </Route> */}
>>>>>>> 07ff9013928fbee2392f85e9cdcead56dfd3916b
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
