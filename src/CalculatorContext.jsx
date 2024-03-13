
import React, { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const useCalculator = () => useContext(CalculatorContext);

export const CalculatorProvider = ({ children }) => {
  const [result, setResult] = useState('');

  const performOperation = (operand1, operand2, operation) => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult('Invalid');
    }
  };

  return (
    <CalculatorContext.Provider value={{ result, performOperation }}>
      {children}
    </CalculatorContext.Provider>
  );
};
