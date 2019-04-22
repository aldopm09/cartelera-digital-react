import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import './css/header.css';
import './css/footer.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
