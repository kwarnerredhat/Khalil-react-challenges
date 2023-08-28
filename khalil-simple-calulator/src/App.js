import React, { useReducer } from 'react';

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, result: state.result + action.value };
    case 'SUBTRACT':
      return { ...state, result: state.result - action.value };
    case 'MULTIPLY':
      return { ...state, result: state.result * action.value };
    case 'DIVIDE':
      return { ...state, result: state.result / action.value };
    case 'CLEAR':
      return { ...state, result: 0 };
    default:
      return state;
  }
};

const Calculator = () => {
  const initialState = { result: 0 };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleOperation = (type, value) => {
    dispatch({ type, value });
  };

  return (
    <div>
      <h1>Khalil Calculator</h1>
      <p>Result: {state.result}</p>
      <button onClick={() => handleOperation('ADD', 5)}>Add 5</button>
      <button onClick={() => handleOperation('SUBTRACT', 2)}>Subtract 2</button>
      <button onClick={() => handleOperation('MULTIPLY', 3)}>Multiply by 3</button>
      <button onClick={() => handleOperation('DIVIDE', 2)}>Divide by 2</button>
      <button onClick={() => handleOperation('CLEAR')}>Clear</button>
    </div>
  );
};

export default Calculator;
