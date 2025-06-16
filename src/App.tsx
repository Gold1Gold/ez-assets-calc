import './App.css';
import RealEstateCalculator from './components/RealEstateCalculator';
import './components/RealEstateCalculator.css';

function App() {
  return (
    <div className="App">
      <section className="NiceSection">
        <h1>Welcome to EZ Assets Calculators</h1>
        <p>Calculate your real estate investment returns with our powerful calculator</p>
        <RealEstateCalculator />
      </section>
    </div>
  );
}

export default App;
