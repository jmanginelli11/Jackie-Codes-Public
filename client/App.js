import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
} from 'react-router-dom';
import store from './app/store';
import NavBar from './app/components/NavBar';
import AllProjects from './app/components/AllProjects';
import Footer from './app/components/Footer';
import AboutTheCoder from './app/components/AboutTheCoder';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <AllProjects />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
