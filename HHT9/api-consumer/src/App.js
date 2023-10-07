import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DataList from './components/DataList';
import DataDetails from './components/DataDetails';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-list" element={<DataList />} />
          <Route path="/data-details/:id" element={<DataDetails />} />
          <Route path="/about" element={<About />} />

          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

