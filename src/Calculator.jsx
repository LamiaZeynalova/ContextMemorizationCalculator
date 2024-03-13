
import React, { useState } from 'react';
import { useCalculator } from './CalculatorContext';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operation, setOperation] = useState('+');
  const { result, performOperation } = useCalculator();

  const handleSubmit = (e) => {
    e.preventDefault();
    performOperation(operand1, operand2, operation);
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={operand1}
          onChange={(e) => setOperand1(e.target.value)}
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
        />
        <button type="submit">Hesapla</button>
      </form>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;


