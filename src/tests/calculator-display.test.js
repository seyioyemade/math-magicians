import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CalculatorDisplay from '../components/calculator-display';

describe('Calculator Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><CalculatorDisplay /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
