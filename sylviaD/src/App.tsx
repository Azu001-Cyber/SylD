import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import PortfolioPage from './pages/PortfolioPage';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          </Routes>
        </main>
        <Footer />
        <ContactButton />
      </div>
    </Router>
  );
}

export default App;
