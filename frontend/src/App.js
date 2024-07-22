import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black">
      <header className="sticky top-0 p-3 w-full font-bold z-50">
        <Navbar />
      </header>
      <main className="main w-full overflow-hidden ">
        <section>
          <LandingPage />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
