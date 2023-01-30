import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
// browser rotuer dom 6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// frame motion
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
