import React from 'react';
// import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <section className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </section>
    </div>
  );
}

export default App;
