// utilise https://github.com/cezary/react-diff
// ATT ne gere pas les accents
import React, { Component } from 'react';
var Diff = require('react-diff');
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React App Test Page</h2>
        </div>
        <p className="App-intro">
          On visualise le diff sur un exemple Git CIMM.
        </p>
        <Diff
          inputA="Il est expressément defendu à toutes personnes, quelles que soient les professions qu'elles exercent, de frapper ou de faire frapper des médailles, jetons ou pièces de plaisir, d'or, d'argent et autres métaux, ailleurs que dans les ateliers de la monnaie, à moins d'être munies d'une autorisation spéciale du ministre de l'économie et des finances.

Néanmoins, tout dessinateur ou graveur ou autre personne peut dessiner ou graver, faire dessiner ou graver des médailles ; celles-ci sont frappées avec le coin qu'ils remettent à la Monnaie de Paris.

Les frais de fabrication sont réglés par le ministre de l'économie et des finances."
          inputB="Il est expressément autorise à toutes personnes, quelles que soient les professions qu'elles exercent, de frapper ou de faire frapper des médailles, jetons ou pièces de plaisir, d'or, d'argent et autres métaux, ailleurs que dans les ateliers de la monnaie, à moins d'être munies d'une autorisation spéciale du ministre de l'économie et des finances.

Néanmoins, tout dessinateur ou graveur ou autre personne peut dessiner ou graver, faire dessiner ou graver des médailles ; celles-ci sont frappées avec le coin qu'ils remettent à la Monnaie de Paris.

Les frais de fabrication sont réglés par le ministre de l'économie et des finances."
          type="words"
        />
      </div>
    );
  }
}

export default App;
