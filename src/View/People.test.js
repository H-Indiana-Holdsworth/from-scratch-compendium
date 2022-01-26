import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import People from './People';

test('searches darth vader', async () => {
  jest.setTimeout(15000);

  render(<People />);

  // look for heading, search bar, and button
  const heading = await screen.findByRole('heading', { name: /star wars people!/i });
  expect(heading).toBeInTheDocument();

  const search = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /search/i });

  // search for darth vader
  const person = 'Darth Vader';
  userEvent.type(search, person);
  userEvent.click(button);

  // get darth vader and checks if result name = queried name
  const result = await screen.findByRole('heading', { name: /darth vader/i });
  expect(result).toBeInTheDocument();
});

test('renders home page', async () => {
  render(<People />);

  const heading = await screen.findByRole('heading', { name: /star wars people!/i });
  const search = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /search/i });
  const name = screen.getByRole('heading', { name: /luke/i });

  expect(heading).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});
