type WeatherData = {
    location: {
      name: string;
      country: string;
      region: string;
      lat: string;
      lon: string;
      localtime: string;
      timezone_id: string;
    };
    current: {
      temperature: number;
      feelslike: number;
      weather_descriptions: string[];
      weather_icons: string[];
      humidity: number;
      wind_speed: number;
      pressure: number;
      uv_index: number;
      visibility: number;
    };
  };
  
  export default function WeatherCard({ data }: { data: WeatherData }) {
    const { location, current } = data;
  
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '400px',
        margin: '2rem auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}>
        <h2>{location.name}, {location.region}, {location.country}</h2>
        <p style={{ fontSize: '0.9rem', color: '#555' }}>
          Where: {location.lat}, {location.lon} | Date/Time {location.localtime} ({location.timezone_id})
        </p>
  
        <img
          src={current.weather_icons[0]}
          alt={current.weather_descriptions[0]}
          style={{ width: '80px', height: '80px', margin: '1rem auto' }}
        />
        <h3>{current.weather_descriptions[0]}</h3>
        <p>Temperature: {current.temperature}°C</p>
        <p>Feels Like: {current.feelslike}°C</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind Speed: {current.wind_speed} km/h</p>
        <p>Visibility: {current.visibility} km</p>
        <p>Pressure: {current.pressure} mb</p>
        <p>UV Index: {current.uv_index}</p>
      </div>
    );
  }
  