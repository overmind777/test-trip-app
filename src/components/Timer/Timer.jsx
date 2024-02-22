import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useTrips } from '../../hooks/useTrips';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const {selectedTrip} = useTrips()

  useEffect(() => {
    if (selectedTrip) {
      const interval = setInterval(() => {
        const now = new Date();
        const start = new Date(selectedTrip.startDate);
        const difference = start - now;

        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        } else {
          const days = +Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = +Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = +Math.floor((difference / 1000 / 60) % 60);
          const seconds = +Math.floor((difference / 1000) % 60);

          setTimeLeft({
            days,
            hours,
            minutes,
            seconds,
          });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [selectedTrip]);

  return (
    <TimerStyled>
      <TimerNumber>
        {timeLeft.days}
        <span>days</span>
      </TimerNumber>
      <TimerNumber>
        {timeLeft.hours}
        <span>hours</span>
      </TimerNumber>
      <TimerNumber>
        {timeLeft.minutes}
        <span>minutes</span>
      </TimerNumber>
      <TimerNumber>
        {timeLeft.seconds}
        <span>seconds</span>
      </TimerNumber>
    </TimerStyled>
  );
};

const TimerStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const TimerNumber = styled.p`
  font-weight: 800;
  & span {
    display: block;
    font-weight: 300;
  }
`;

export default Timer;

