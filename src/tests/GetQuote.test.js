import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import GetQuote from '../components/GetQuote';

describe('Get Quote form API', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><GetQuote /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
