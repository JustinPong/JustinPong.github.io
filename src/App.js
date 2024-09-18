import AppHeader from "./components/partials/AppHeader";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Email from "./components/fixed-button/email/email";

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Email />
      </Router>
    </div>
  );
}

export default App;
