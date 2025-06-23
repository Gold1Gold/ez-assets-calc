import "./App.css";
import Header from "./components/Header";
import RealEstateCalculator from "./components/RealEstateCalculator";
import "./components/RealEstateCalculator.css";
import "./components/Header.css";
import GlossaryButton from "./components/GlossaryButton";
import { Routes, Route } from "react-router-dom";
import GlossaryPage from "./components/GlossaryPage";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <section className="NiceSection">
                            <RealEstateCalculator />
                            <GlossaryButton />
                        </section>
                    }
                />
                <Route path="/GlossaryPage" element={<GlossaryPage />} />
            </Routes>
        </div>
    );
}

export default App;
