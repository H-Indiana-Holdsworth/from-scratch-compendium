export async function getPeople(query) {
  const params = new URLSearchParams();
  params.set('people', query);

  const response = await fetch(`https://swapi.dev/api/people/?${params.toString()}`);
  const { results } = await response.json();
  return results;
}
