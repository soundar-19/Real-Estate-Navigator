import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyTypes from './components/home/PropertyTypes';
import PropertyDetails from './pages/PropertyDetails';
import Agents from './pages/Agents';
import Contact from './pages/Contact';
import AddProperty from './pages/AddProperty';
import Favorites from './pages/Favorites';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/global.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property-types" element={<PropertyTypes />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/property-details" element={<PropertyDetails />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
