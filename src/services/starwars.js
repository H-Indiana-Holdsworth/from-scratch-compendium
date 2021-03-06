export async function getPeople(query) {
  const params = new URLSearchParams();
  params.set('search', query);

  const response = await fetch(`https://swapi.dev/api/people/`);
  const { results } = await response.json();
  return results;
}
