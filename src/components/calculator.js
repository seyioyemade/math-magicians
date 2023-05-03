import Navbar from './Navbar';
import CalculatorDisplay from './Calculator-display';

const Calculator = () => (
  <>
    <Navbar />
    <div className="calculator-page">
      <h2>Let&apos;s do some math!</h2>
      <CalculatorDisplay />
    </div>
  </>

);

export default Calculator;
