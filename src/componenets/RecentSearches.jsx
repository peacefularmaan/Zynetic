export default function RecentSearches({ cities, onSearch }) {
    return (
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {cities.map((city, idx) => (
            <button
              key={idx}
              onClick={() => onSearch(city)}
              className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-blue-400 transition"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  }
  