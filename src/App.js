import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImproveSkills from './components/ImproveSkills';
import QuoteSection from './components/QuoteSection';
import ChiefsSection from './components/ChiefsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChiefsSection />
      </div>
    </div>
  );
}

export default App;
