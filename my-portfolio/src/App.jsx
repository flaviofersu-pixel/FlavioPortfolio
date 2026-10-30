import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Pages/Home/Home";
import { LanguageProvider } from "./i18n";

export function App() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main id="main" className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
