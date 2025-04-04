'use server'

export async function getWeather(city: string) {
  const apiKey = process.env.WEATHERSTACK_API_KEY;
  if (!apiKey) throw new Error("Missing API key");

  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${encodeURIComponent(city)}`;
  const res = await fetch(url);

  const data = await res.json();
  if (data.error) {
    throw new Error(data.error.info || 'Weather API error');
  }

  return data;
}
