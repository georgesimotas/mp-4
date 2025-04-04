export const dynamic = 'force-dynamic';
export const runtime = 'edge';

import { getWeather } from '../lib/getWeather';
import WeatherCard from '../components/WeatherCard';
import BackButton from '../components/BackButton';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function WeatherPage(props: any) {
  const cityParam = props.searchParams?.city;
  const city = Array.isArray(cityParam) ? cityParam[0] : cityParam;

  if (!city) {
    return (
      <main style={{ position: 'relative', minHeight: '100vh' }}>
        <BackButton />
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>No city provided</h2>
        <p style={{ textAlign: 'center' }}>Please go back and search for a city.</p>
      </main>
    );
  }

  try {
    const data = await getWeather(city);
    return (
      <main style={{ position: 'relative', minHeight: '100vh' }}>
        <BackButton />
        <WeatherCard data={data} />
      </main>
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Something went wrong';

    return (
      <main style={{ position: 'relative', minHeight: '100vh' }}>
        <BackButton />
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Error</h2>
        <p style={{ textAlign: 'center' }}>{errorMessage}</p>
      </main>
    );
  }
}
