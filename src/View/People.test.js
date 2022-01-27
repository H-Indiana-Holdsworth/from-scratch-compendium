import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import People from './People';

test.only('searches darth vader', async () => {
  jest.setTimeout(30000);
  render(<People />);

  // look for heading, search bar, and button
  // const loading = screen.getByText(/loading/i);
  // expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

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

test.only('renders home page', async () => {
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
