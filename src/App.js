import React, { Component } from 'react';
import StyleGuide from './StyleGuide';
import Draft from './Draft';

const routes = {
  '/styles': StyleGuide,
  '/draft': Draft,
  '/': Draft
}

class App extends Component {
  render() {

    const path = window.location.pathname;

    const ComponentToRender = routes[path];

    return (
      <ComponentToRender />
    );
  }
}

export default App;
