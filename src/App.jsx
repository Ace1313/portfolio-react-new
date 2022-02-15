import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Projects from './components/pages/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
         </Routes>
      </>
   );
}

export default App;
