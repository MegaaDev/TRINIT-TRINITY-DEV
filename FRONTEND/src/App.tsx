import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
