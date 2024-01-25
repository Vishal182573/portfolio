import './App.css';
import MovableCircle from './components/MovableCircle'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
    <header>
    <MovableCircle/>
      <Navbar/>
      </header>
    <div
    className="main w-[100%] h-full overflow-hidden" >
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
