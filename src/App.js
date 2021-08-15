import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WorkExpreince from './components/WorkExpreince';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import * as IoIcons from 'react-icons/io';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work-experience" component={WorkExpreince} />
          <Route path="/social" component={Social} />
        </Switch>
        <div className={'finger-box'}>
          <IoIcons.IoMdFingerPrint className="menu-bars-icon m-2 display-6" />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
