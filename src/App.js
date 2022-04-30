import React from "react";
import {BrowserRouter} from "react-router-dom"
import AppRouter from './routers/index.js'
import Navbar from "./shared/components/navbar/navbar.js";
import {AppThemeProvider} from './shared/context/ThemeContext/ThemeContext'
const App = ()=> {
  return (
    <AppThemeProvider>
     <Navbar></Navbar>
      <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
