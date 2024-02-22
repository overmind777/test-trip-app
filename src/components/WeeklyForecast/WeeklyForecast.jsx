import React, { useEffect, useState } from 'react';
import { useTrips } from '../../hooks/useTrips';

import { fetchWeatherDataDate } from '../../operations/api';

import weatherSvg from '../../images/weather.svg';

import styled from 'styled-components';

const WeeklyForecast = () => {
  const { selectedTrip } = useTrips();

  const [weeklyForecast, setWeeklyForecast] = useState();

  const formatDateString = date => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    if (selectedTrip) {
      const today = new Date();
      const endDate = new Date();
      endDate.setDate(today.getDate() + 7);
      console.log(today.toISOString());
      fetchWeatherDataDate({
        location: selectedTrip.city,
        startDate: formatDateString(today),
        endDate: formatDateString(endDate),
      }).then(data => {
        setWeeklyForecast(data.days);
      });
    }
  }, [selectedTrip]);

  return (
    <div>
      <h3>Week</h3>
      <ListStyled>
        {weeklyForecast?.map((day, idx) => {
          return (
            <ListItem key={idx}>
              <p>
                {new Date(day.datetimeEpoch * 1000).toLocaleDateString(
                  'en-US',
                  { weekday: 'long' }
                )}
              </p>
              <svg width="50" height="50">
                <use xlinkHref={`${weatherSvg}#${day.icon}`}></use>
              </svg>
              <p>
                {`${day.tempmin}`}&deg;/{`${day.tempmax}`}&deg;
              </p>
            </ListItem>
          );
        })}
      </ListStyled>
    </div>
  );
};

const ListStyled = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 5px;
`;

export default WeeklyForecast;
