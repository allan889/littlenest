import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import theme from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Box sx={{ width: "100%", minHeight: "100vh" }}>
          <Navbar />

          <Box component="main" sx={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;