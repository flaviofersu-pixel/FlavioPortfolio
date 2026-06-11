import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Pages/Home/Home';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="mainContent">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
