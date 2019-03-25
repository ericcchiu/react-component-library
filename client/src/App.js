import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import CarouselView from './components/CarouselComponent/CarouselViewRefactor';
import SignInForm from './components/Forms/SignInForm';
import FormView from './components/Forms/FormView';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      <h1>Welcome to React Component library</h1>
      {isLoading && <Spinner animation="border" variant="success" />}
      {!(isLoading) && <CarouselView />}
      <SignInForm />
      <FormView />
    </div>
  )
}
export default App; 
