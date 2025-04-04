import SearchForm from './components/SearchForm';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌤️ Weather App</h1>
      <p>Enter a city below to get the current weather.</p>
      <SearchForm />
    </main>
  );
}
