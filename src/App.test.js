import { render, screen } from '@testing-library/react';
import App from './App';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import People from './View/People';
import userEvent from '@testing-library/user-event';

const vader = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'https://swapi.dev/api/people/4/',
    },
  ],
};

const server = setupServer(
  rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
    return res(ctx.json(vader));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('renders loading', async () => {
  render(<App />);
  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('searches darth vader', async () => {
  server.use(
    rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
      return res(ctx.json(vader));
    })
  );
  render(<People />);

  // look for heading, search bar, and button
  const loading = await screen.findByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const heading = await screen.findByRole('heading', { name: /star wars people!/i });
  expect(heading).toBeInTheDocument();

  const search = await screen.findByRole('textbox');
  const button = await screen.findByRole('button', { name: /search/i });

  // // search for darth vader
  const person = 'Darth Vader';
  userEvent.type(search, person);
  userEvent.click(button);

  // // get darth vader and checks if result name = queried name
  const result = await screen.findByText(vader.results[0].name);
  expect(result).toBeInTheDocument();
});
