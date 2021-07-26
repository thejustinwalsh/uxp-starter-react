// App imports
import React from 'react';
import ReactDOM from 'react-dom';
import Spectrum from 'react-uxp-spectrum';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buttons from './components/Buttons';
import Checkboxes from './components/Checkboxes';
import Typography from './components/Typography';
import Dropdown from './components/Dropdown';
import RadioGroup from './components/RadioGroup';
import Progressbar from './components/Progressbar';
import Sliders from './components/Sliders';
import Textfields from './components/Textfields';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

import './App.css';

export default function App() {
  const renderDialog = () => {
    const dialogElement = document.createElement('dialog');
    document.appendChild(dialogElement);
    ReactDOM.render(
      <div className="panel">
        <Spectrum.Heading size="M">Modal Dialog</Spectrum.Heading>
        <Spectrum.Heading size="S">👋 Hi.</Spectrum.Heading>
        <Spectrum.Body>This is a modal dialog rendered from react at runtime.</Spectrum.Body>
        <Spectrum.Detail>Slick. 🚀</Spectrum.Detail>
      </div>,
      dialogElement
    );
    dialogElement.addEventListener('close', () => {
      document.removeChild(dialogElement);
    });
    dialogElement.showModal();
  };

  return (
    <div className="panel">
      <Typography />
      <Spectrum.Divider size="medium" />
      <div className="element">
        <div>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </div>
        <Buttons />
        <Checkboxes />
        <Dropdown />
        <RadioGroup />
        <Progressbar />
        <Sliders />
        <Textfields />
      </div>
      <footer className="component">
        <Spectrum.Button onClick={() => renderDialog()}>Modal Dialog</Spectrum.Button>
      </footer>
    </div>
  );
}
