import logo from './logo.svg';
import './App.css';
import BasicDemo from './components/header';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formation from './components/Formation';
import Experience from './components/Experience';
import Cour from './components/Cour';
import Projet from './components/Project';
import Certification from './components/Certification';

function App() {
  return (
    <div className="App">
      <Router>
      <BasicDemo/>
    
     
      <Routes>
                     <Route exact path="/Accueil" element={ <Accueil/>}/>
                     <Route exact path="/Formation" element={ <Formation/>}/>
                     <Route exact path="/Experience" element={ <Experience/>}/>
                     <Route exact path="/Certification" element={ <Certification/>}/>
                     <Route exact path="/Projet" element={ <Projet/>}/>
                    

                 </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
