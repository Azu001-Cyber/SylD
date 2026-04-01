import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';

import PortfolioPage from './pages/PortfolioPage';
import Home from './pages/Home';
import AiEditing from './pages/AiEditing';
import Consultation from './pages/Consultation';
import ContentWriter from './pages/ContentWriter'
import DataEntry from './pages/DataEntry';
import BlogandContentManagement from './pages/Blog&ContentManagement';
import CustomerService from './pages/CustomerService';
import HRAdminAssistant from './pages/HRAdminAssistant';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/book-consultation" element={<Consultation/>}/>
            <Route path="/skills/writing" element={<ContentWriter/>}/>
            <Route path="/skills/ai-editing" element={<AiEditing/>}/>
            <Route path="/skills/data_entry" element={<DataEntry/>}/>
            <Route path="/skills/blog-management" element={<BlogandContentManagement/>}/>
            <Route path="skills/customer-support" element={<CustomerService/>}/>
            <Route path="skills/hr-admin-assistant" element={<HRAdminAssistant/>}/>
          </Routes>
        </main>
        <Footer />
        <ContactButton />
      </div>
    </Router>
  );
}

export default App;
