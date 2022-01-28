export async function getPeople() {
  const response = await fetch(`https://swapi.dev/api/people/`);
  const { results } = await response.json();
  console.log('results all', results);
  return results;
}

export async function getPerson(query) {
  const params = new URLSearchParams();
  params.set('search', query);

  const response = await fetch(`https://swapi.dev/api/people/`);
  const { results } = await response.json();
  console.log('results search', results);
  return results;
}
