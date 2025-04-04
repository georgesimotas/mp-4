import { getWeather } from '../lib/getWeather';
import WeatherCard from '../components/WeatherCard';
import BackButton from '../components/BackButton';

type PageProps = {
  params: { [key: string]: string | string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function WeatherPage({ searchParams }: PageProps) {
  const city = searchParams?.city as string | undefined;

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
  } catch (error: unknown) {
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