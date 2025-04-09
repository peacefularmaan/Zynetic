import React from "react";

export default function WeatherCard({ weather, onRefresh }) {
  const { name, main, weather: weatherInfo, wind } = weather;
  const { temp, humidity } = main;
  const { speed } = wind;
  const condition = weatherInfo[0].main;
  const icon = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative bg-blue-200 dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md text-center overflow-hidden">
        <button
          onClick={onRefresh}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
        >
          🔄 Refresh
        </button>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <img src={icon} alt={condition} className="mx-auto h-20 w-20" />
        <p className="text-4xl font-bold mt-2">{temp}°C</p>
        <p className="text-lg capitalize">{condition}</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <p>💧 Humidity: {humidity}%</p>
          <p>🌬️ Wind: {speed} km/h</p>
        </div>
      </div>
    </div>
  );
}
