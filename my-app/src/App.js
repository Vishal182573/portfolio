import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // add other options as needed
    });

    // Ensure to update Locomotive Scroll when the component is unmounted
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
    <header>
      <Navbar/>
      </header>
    <div
    className="main w-[100%] h-full overflow-hidden" ref={scrollRef} >
      <main>
        <section><LandingPage/></section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
}

export default App;
