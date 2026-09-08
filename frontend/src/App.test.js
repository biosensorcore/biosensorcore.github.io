import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders Biosensor Core layout', () => {
  render(<Header />);
  expect(screen.getByRole('link', { name: /biosensor core/i })).toBeInTheDocument();
});
