import './i18n';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import LegalisierungContextProvider from './context/LegalisierungContext';

// TODO why do we have need a min?
// import './styles/style.min.css';
import './styles/style.scss';
import PopupModal from './components/PopupModal';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Letter from './components/Letter';
import Main from './components/Main';
import Materials from './components/Materials';
import Footer from './components/Footer';

const App = () => (
  <Suspense fallback="loading">

    <LegalisierungContextProvider>
      <PopupModal />
      <div className="App">
        <Router>
          <Link to="/">
            <Hero />
          </Link>

          <Navbar />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/materials">
              <Materials />
            </Route>
            <Route path="/letter">
              <Letter />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </LegalisierungContextProvider>
  </Suspense>
);

export default App;
