import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
    <header className="bg-blue-600 p-4 text-white">
          <nav>
            <ul className="flex justify-center space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-blue-600 p-4 text-white text-center">
          <p>&copy; 2024 My Multi-Page Website</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
