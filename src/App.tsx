import './App.css';
import Header from './components/Header';
import RealEstateCalculator from './components/RealEstateCalculator';
import './components/RealEstateCalculator.css';
import './components/Header.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="NiceSection">
        <RealEstateCalculator />
      </section>
    </div>
  );
}

export default App;
