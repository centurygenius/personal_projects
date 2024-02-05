import { Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Latest from './pages/Latest';

function App() {
  return (
    
      <div>
         
          <Routes>
            <Route path="/" element={<Main />}>Home</Route>
            <Route path="/contact" element={<Contact />}>Contact</Route>
            <Route path="/pricing" element={<Pricing />}>Pricing</Route>
            <Route path="/latest" element={<Latest />}></Route>
          </Routes>
      </div>
    
    
  );
}

export default App;