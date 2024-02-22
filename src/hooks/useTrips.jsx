import React, { createContext, useContext, useState } from 'react';

const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [city, setCity] = useState('')
  const [trips, setTrips] = useState([
    {
      city: 'London',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
    },
  ]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTrip = trip => {
    setTrips(prevTrips => [...prevTrips, trip]);
  };

  const selectTrip = tripCity => {
    const trip = trips.find(
      t => t.city.toLowerCase() === tripCity.toLowerCase()
    );
    setSelectedTrip(trip);
  };

  const findCity = city => {
    setCity(city)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TripsContext.Provider
      value={{
        trips,
        addTrip,
        selectedTrip,
        selectTrip,
        isModalOpen,
        openModal,
        closeModal,
        city,
        findCity,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

export const useTrips = () => useContext(TripsContext);
