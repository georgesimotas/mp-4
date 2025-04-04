import { getWeather } from '../lib/getWeather';
import WeatherCard from '../components/WeatherCard';
import BackButton from '../components/BackButton';


export default async function WeatherPage({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const city = searchParams.city;

  if (!city) {
    return (
      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>No city provided</h2>
        <p>Please go back and search for a city.</p>
      </main>
    );
  }

  try {
    const data = await getWeather(city);
    return (
      <main>
        <WeatherCard data={data} />
        <BackButton />
      </main>
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Something went wrong';

    return (
      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Error</h2>
        <p>{errorMessage}</p>
      </main>
    );
  }
}
