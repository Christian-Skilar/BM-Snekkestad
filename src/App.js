import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import { Navbar, Header, About, Gallery, Contact } from './sections/index';
import images from './assets/images';
import './App.scss';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
    {loading ? (
        <div className='loading'>
          <img src={images.logo} alt='logo'/>
          <h2>BM Snekkestad</h2>
          <PropagateLoader color="#2AB0EC" />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <About />
          <Gallery />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
