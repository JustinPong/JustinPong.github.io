import AppHeader from "./components/partials/AppHeader";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
