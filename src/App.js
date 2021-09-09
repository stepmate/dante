import React from 'react';
import Navbar from "./components/Navbar"
import {Section2} from "./components/Section2"
import {Section3} from "./components/Section3"
import {Section4} from "./components/Section4"
import {Section5} from "./components/Section5"
import {Footer} from "./components/Footer"
// Styles
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themeConfig";
import "./global.css";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <div className="hero">
        <Navbar/>
      </div>

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Footer />

    </ThemeProvider>
  );
}
