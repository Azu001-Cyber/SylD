import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';

import PortfolioPage from './pages/PortfolioPage';
import Home from './pages/Home';
import AiEditing from './pages/AiEditing';
import Consultation from './pages/Consultation';
import ContentWriter from './pages/ContentWriter'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/book-consultation" element={<Consultation/>}></Route>
            <Route path="/skills/writing" element={<ContentWriter/>}></Route>
            <Route path="/skills/ai_editing" element={<AiEditing/>}/>
          </Routes>
        </main>
        <Footer />
        <ContactButton />
      </div>
    </Router>
  );
}

export default App;
