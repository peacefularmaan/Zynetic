import { useEffect, useState } from 'react';
import SearchBar from './componenets/SearchBar';
import WeatherCard from './componenets/WeatherCard';
import Loader from './componenets/Loader';
import ThemeToggle from './componenets/ThemeToggle';
import RecentSearches from './componenets/RecentSearches';
import { fetchWeatherData } from './api/weather';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentCities')) || [];
    setRecent(stored);
  }, []);

  const saveToRecent = (cityName) => {
    const updated = [cityName, ...recent.filter(c => c !== cityName)].slice(0, 5);
    setRecent(updated);
    localStorage.setItem('recentCities', JSON.stringify(updated));
  };

  const handleSearch = async (cityName) => {
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const data = await fetchWeatherData(cityName);
      setWeather(data);
      setCity(cityName);
      saveToRecent(cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    if (city) handleSearch(city);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-2xl transition-all duration-300">
        <ThemeToggle
          theme={theme}
          toggleTheme={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
        />
        <h1 className="text-3xl font-bold mt-6 mb-4 text-center">🌦️ Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {weather && <WeatherCard weather={weather} onRefresh={refresh} />}
        {recent.length > 0 && <RecentSearches cities={recent} onSearch={handleSearch} />}
      </div>
    </div>
  );
}
