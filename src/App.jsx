// import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Messanger from "./pages/Messanger";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
function App() {
  // const [page, setPage] = useState("home");
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chat" element={<Messanger />} />
            <Route exact path="/profile/:username" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
