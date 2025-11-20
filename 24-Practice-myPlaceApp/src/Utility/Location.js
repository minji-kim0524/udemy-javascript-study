const GOOGLE_API_KEY = AIzaSyBHIfMov2dOAFYqosdNwbu8VvPEMcnA9M4;

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&Key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again!");
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  // console.log(data);
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
