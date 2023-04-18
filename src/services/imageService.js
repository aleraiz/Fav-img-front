export async function getImages() {
  const request = await fetch("http://localhost:3001/");
  const images = await request.json();

  return images;
}
