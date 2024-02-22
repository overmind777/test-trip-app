import React, { useEffect, useState } from 'react';
import { useTrips } from '../../hooks/useTrips';
import weatherSvg from '../../icons/weather.svg';
import Timer from '../Timer/Timer';

import { fetchWeatherDataToday } from '../../operations/api';

import { WeatherStyled, Wrapper } from './WeatherForecast.styled';

const WeatherForecast = () => {
  const { selectedTrip } = useTrips();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (selectedTrip) {
      const weather = fetchWeatherDataToday({
        location: selectedTrip.city,
      });

      weather.then(data => {
        setWeatherData({
          day: new Date(data.days[0].datetimeEpoch * 1000).toLocaleDateString(
            'en-US',
            { weekday: 'long' }
          ),
          weather: {
            icon: data.days[0].icon,
            temp: data.days[0].temp,
          },
          location: data.address,
        });
      });
    }
  }, [selectedTrip]);

  return (
    <Wrapper>
      {weatherData ? (
        <WeatherStyled>
          <p>{weatherData.day}</p>
          <svg width="50" height="50">
            <use xlinkHref={`${weatherSvg}#${weatherData.weather.icon}`}></use>
          </svg>
          <p>{weatherData.weather.temp}</p>
          <p>{weatherData.location}</p>
          <Timer />
          {/* <Timer startDate={selectedTrip.startDate}/> */}
        </WeatherStyled>
      ) : (
        <WeatherStyled>Оберіть подорож для перегляду погоди.</WeatherStyled>
      )}
    </Wrapper>
  );
};

export default WeatherForecast;
