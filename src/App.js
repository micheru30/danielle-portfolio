import React, { Component } from 'react';
import routes from './routes'
import Header from './components/header/header'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
