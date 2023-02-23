import "./App.css";
import "./sass/main.scss";

import Landingpage from "./screens/landingpage/landingpage";
import Navbar from "./components/navbar/navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { Routes, Route } from 'react-router-dom';
import Pricingpage from "./screens/pricingpage/pricingpage";
import Companypage from "./screens/companypage/companypage";
import Aboutuspage from "./screens/aboutuspage/aboutuspage";

function App() {
  library.add(faStar, faMoon, faSun);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/pricing" element={<Pricingpage />} />
          <Route path="/company" element={<Companypage />} />
          <Route path="/aboutus" element={<Aboutuspage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
