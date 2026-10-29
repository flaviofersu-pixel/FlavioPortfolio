import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Pages/Home/Home";

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-night">
      <NavBar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
