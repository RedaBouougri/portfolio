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
import Projet2 from './components/Projets2';

function App() {
  return (
    <div className="App">
      <Router>
      <BasicDemo/>
    
     
      <Routes>
                     <Route exact path="/" element={ <Accueil/>}/>
                     <Route exact path="/Formation" element={ <Formation/>}/>
                     <Route exact path="/Experience" element={ <Experience/>}/>
                     <Route exact path="/Certification" element={ <Certification/>}/>
                    
                     <Route exact path="/Projet" element={ <Projet2/>}/>
                    

                 </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
