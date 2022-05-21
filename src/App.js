import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImproveSkills from './components/ImproveSkills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSkills />
      </div>
    </div>
  );
}

export default App;
