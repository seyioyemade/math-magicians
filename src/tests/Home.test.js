import renderer from 'react-test-renderer';
import Home from '../components/Home';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});