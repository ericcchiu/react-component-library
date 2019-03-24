import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import CarouselView from './components/CarouselComponent/CarouselViewRefactor';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      <h1>Welcome to React Component library</h1>
      {isLoading && <Spinner animation="border" variant="success" />}
      {!(isLoading) && <CarouselView />}
    </div>
  )
}
export default App; 
