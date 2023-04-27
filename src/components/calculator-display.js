import { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorDisplay = () => {
  const [value, setValue] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const { total, next, operation } = value;

  const handleClick = (num) => {
    setValue(calculate(value, num));
  };

  return (
    <section>
      <table>
        <tr>
          <th colSpan="4">
            {total}
            {operation}
            {next}
          </th>
        </tr>
        <tr>
          <td><button type="button" onClick={() => handleClick('AC')}>AC</button></td>
          <td><button type="button" onClick={() => handleClick('+/-')}>+/-</button></td>
          <td><button type="button" onClick={() => handleClick('%')}>%</button></td>
          <td><button type="button" onClick={() => handleClick('÷')}>÷</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => handleClick('7')}>7</button></td>
          <td><button type="button" onClick={() => handleClick('8')}>8</button></td>
          <td><button type="button" onClick={() => handleClick('9')}>9</button></td>
          <td><button type="button" onClick={() => handleClick('x')}>x</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => handleClick('4')}>4</button></td>
          <td><button type="button" onClick={() => handleClick('5')}>5</button></td>
          <td><button type="button" onClick={() => handleClick('6')}>6</button></td>
          <td><button type="button" onClick={() => handleClick('-')}>-</button></td>
        </tr>
        <tr>
          <td><button type="button" onClick={() => handleClick('1')}>1</button></td>
          <td><button type="button" onClick={() => handleClick('2')}>2</button></td>
          <td><button type="button" onClick={() => handleClick('3')}>3</button></td>
          <td><button type="button" onClick={() => handleClick('+')}>+</button></td>
        </tr>
        <tr>
          <td colSpan="2"><button type="button" onClick={() => handleClick('0')}>0</button></td>
          <td><button type="button" onClick={() => handleClick('.')}>.</button></td>
          <td><button type="button" onClick={() => handleClick('=')}>=</button></td>
        </tr>
      </table>
    </section>
  );
};

export default CalculatorDisplay;
