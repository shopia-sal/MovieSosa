import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Footer from './footer/Footer';
import { ThemeProvider } from "./context/ThemeContext"

import Routes from './config/Routes';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
