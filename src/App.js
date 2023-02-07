import React from "react";
import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer, FeaturedGames } from "./Sections/index";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home,Browse,Details, Profile,Streams } from "./Pages/index";
function App() {
  return (
    // React Frugments shortcut
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/browse" element={<Browse />}/>
                <Route path="/details" element={<Details />}/>
                <Route path="/streams" element={<Streams />}/>
                <Route path="/profile" element={<Profile />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
