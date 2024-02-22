import React from 'react';
import TripItem from '../TripItem/TripItem';
import { useTrips } from '../../hooks/useTrips';
import Button from '../Button/Button';

import { List, TripWrapper, Wrapper } from './TripList.styled';

const TripList = () => {
  const { trips, selectTrip, city } = useTrips();

  const getImageUrl = cityName => `./image/${cityName}.jpg`;
  
  const filteredTrips = city
    ? trips.filter(t => t.city.toLowerCase().includes(city.toLowerCase()))
    : trips;

  return (
    <Wrapper>
      <TripWrapper>
        <List>
          {filteredTrips?.map((trip, idx) => {
            return (
              <TripItem
                key={idx}
                onClick={() => {
                  selectTrip(trip.city);
                }}
                city={trip.city}
                start={trip.startDate}
                end={trip.endDate}
                imgUrl={getImageUrl(trip.city)}
              />
            );
          })}
        </List>
      </TripWrapper>
      <Button />
    </Wrapper>
  );
};

export default TripList;
