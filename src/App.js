
import React from 'react';
import { CalculatorProvider } from './CalculatorContext';
import Calculator from './Calculator';
import './calculator.css'; 

const App = () => {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
};

export default App;
