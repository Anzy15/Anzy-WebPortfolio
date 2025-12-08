import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, left: 0, bottom: 0, right: 0, zIndex: 0, backgroundColor: '#000000' }}>
        <Particles
          particleColors={['#1488e1', '#1488e1']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
