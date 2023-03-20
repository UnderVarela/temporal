export async function fetchMovies(url) {
  const response = await fetch(url)
  return await response.json()
}
