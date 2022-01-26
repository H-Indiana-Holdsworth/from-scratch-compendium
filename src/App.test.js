import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import People from './View/People';

test('renders learn react link', async () => {
  render(<App />);
  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
