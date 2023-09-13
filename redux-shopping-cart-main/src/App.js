import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoute';




const App = () => {
  

  return (
    <>
    <div>
      <Provider store={store}>
    <Navbar/>
    <Header/>
    <AllRoutes/>
    <Cart/>
        <Footer />
        
      </Provider>
      </div>


    </>

    
  );
};

export default App;

