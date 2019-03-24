import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
// import CarouselView from './components/refactor';
import CarouselView from './components/CarouselView';
const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <h1>Welcome to React Component library</h1>
      <CarouselView />
    </div>
  )
}
export default App; 
