import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.css"
import { Home } from "./components/Home";
import { MainComp } from "./components/MainComp";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MainComp/>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/search/:q=YourQuery" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
