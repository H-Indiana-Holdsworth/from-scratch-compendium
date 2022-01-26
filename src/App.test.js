import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading', async () => {
  render(<App />);
  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
