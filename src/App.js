import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
// import Team from './pages/Team';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* loginPage */}
        {/* <Route path="/login">
          <h1>Login Page</h1>
        </Route> */}

        {/* contect */}
        <Route path="/contact">
          <div className="container">
            <ContactPage />
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
