// import React from 'react';
// import TripItem from '../TripItem/TripItem';
// import { useTrips } from '../../hooks/useTrips';
// import Button from '../Button/Button';

// import { List, TripWrapper, Wrapper } from './TripList.styled';

// const TripList = () => {
//   const { trips, selectTrip, city } = useTrips();

//   const getImageUrl = cityName => `./images/${cityName}.jpg`;

//   const filteredTrips = city
//     ? trips.filter(t => t.city.toLowerCase().includes(city.toLowerCase()))
//     : trips;

//   return (
//     <Wrapper>
//       <TripWrapper>
//         <List>
//           {filteredTrips?.map((trip, idx) => {
//             return (
//               <TripItem
//                 key={idx}
//                 onClick={() => {
//                   selectTrip(trip.city);
//                 }}
//                 city={trip.city}
//                 start={trip.startDate}
//                 end={trip.endDate}
//                 imgUrl={getImageUrl(trip.city.toLowerCase())}
//               />
//             );
//           })}
//         </List>
//       </TripWrapper>
//       <Button />
//     </Wrapper>
//   );
// };

// export default TripList;


import React from 'react';
import TripItem from '../TripItem/TripItem';
import { useTrips } from '../../hooks/useTrips';
import Button from '../Button/Button';
import { List, TripWrapper, Wrapper } from './TripList.styled';

// Імпортуйте зображення
import londonImage from '../../images/london.jpg';
import parisImage from '../../images/paris.jpg';
// імпортуйте інші зображення за необхідності

// Створіть карту зображень
const cityImages = {
  london: londonImage,
  paris: parisImage,
  // додайте інші міста та їх зображення тут
};

const TripList = () => {
  const { trips, selectTrip, city } = useTrips();

  const getImageUrl = cityName =>
    cityImages[cityName.toLowerCase()] || 'defaultImageURL';

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
