  const getForecast = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=55.7842432&lon=49.23392&units=metric&appid=20c4bd51cf84f12ebda1a2d7f69862bc`
  );
  const data = await response.json();
  const forecast = [
    data.city,
    data.list[0],
    data.list[8],
    data.list[16],
    data.list[24],
    data.list[32],
    data.list[39],
  ];
  console.log(forecast);
  return forecast;
};

export { getForecast };
