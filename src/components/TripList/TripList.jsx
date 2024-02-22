import React from 'react';
import TripItem from '../TripItem/TripItem';
import { useTrips } from '../../hooks/useTrips';
import Button from '../Button/Button';
import { List, TripWrapper, Wrapper } from './TripList.styled';

import londonImage from '../../images/london.webp';
import parisImage from '../../images/paris.webp';
import berlinImage from '../../images/berlin.webp';
import romeImage from '../../images/rome.webp';
import pragaImage from '../../images/praga.webp';

const cityImages = {
  london: londonImage,
  paris: parisImage,
  berlin: berlinImage,
  rome: romeImage,
  praga: pragaImage,
};

const TripList = () => {
  const { trips, selectTrip, city } = useTrips();

  const getImageUrl = cityName =>
    cityImages[cityName.toLowerCase()];

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
                imgUrl={getImageUrl(trip.city.toLowerCase())}
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
