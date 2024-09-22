import AppHeader from "./components/partials/AppHeader";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Email from "./components/fixed-button/email/Email";
import SocialMedia from "./components/fixed-button/social-media/SocialMedia";

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Email />
        <SocialMedia />
      </Router>
    </div>
  );
}

export default App;
