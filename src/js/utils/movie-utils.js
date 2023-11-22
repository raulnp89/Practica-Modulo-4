const movieBaseUrl = "http://image.tmdb.org/t/p";

export function getMoviePosterUrl(path, width = 400) {
  if (typeof path !== "string" || typeof width !== "number") return null;
  return `${movieBaseUrl}/w${width}/${path}`;
}
