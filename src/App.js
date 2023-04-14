import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Bio from "./components/Bio/Bio";
import Discography from "./components/Discography/Discography";
// import Teaching from "./components/Teaching/Teaching";
import Contact from "./components/Contact/Contact";
import Videos from "./components/Videos/Videos";
import Pictures from "./components/Pictures/Pictures";
import EPK from "./components/EPK/EPK";
import Calender from "./components/Calender/Calender";
// import CalenderV2 from "./components/Calender/CalenderV2";
// import BandsInTownCalender from "./components/Calender/BandsInTownCalendar";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Page404 from "./components/404/Page404";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./colorpalette";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/epk" element={<EPK />} />
          {/* <Route path="/calender" element={<CalenderV2 />} /> */}
          {/* <Route path="/calender" element={<BandsInTownCalender />} /> */}
          <Route path="/calender" element={<Calender />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
