const API_KEY = 'a1d53f4a6999c22584359614dcf22906'; // Replace with your actual key

export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("City not found or API error");
  }
  return await response.json();
};
