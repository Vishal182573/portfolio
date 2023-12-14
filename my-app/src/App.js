import './App.css';
import Landing_Page from './Landing_Page';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <header>
      <Navbar/>
      </header>
      <main>
        <section><Landing_Page/></section>
        <aside></aside>
      </main>
    </div>
  );
}

export default App;
