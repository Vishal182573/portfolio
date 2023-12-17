import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <header>
      <Navbar/>
      </header>
      <main>
        <section><LandingPage/></section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
