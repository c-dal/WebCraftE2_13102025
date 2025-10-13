import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import CoursesPage from './pages/CoursesPage';
import Inscription from './pages/Inscription';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/formations" element={<CoursesPage />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="*" element={
            <div className="alert alert-warning mt-5">
              <h2>404 - Page non trouvée</h2>
              <p>Cette page n'existe pas.</p>
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
