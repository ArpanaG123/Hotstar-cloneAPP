import React from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Genres from './components/genres/Genres';
import Show from './components/shows/Show';
import ImageSlider from './components/slider/ImageSlider';
import Sport from './components/sports/Sport';
import Trending from './components/trending/Trending';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <Trending />
      <Sport/>
      <Show />
      <Genres />
      <Footer />
    </div>
  );
}

export default App;
