import React from 'react';
import { useTrips } from '../../hooks/useTrips';

import styled from 'styled-components';

const Input = () => {
  const {city, findCity} = useTrips()
  
  return (
    <>
      <InputStyled
        type="text"
        placeholder="Search your trip"
        value={city}
        onChange={(e) => findCity(e.target.value)} />
    </>
  );
};

const InputStyled = styled.input`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: lightgray;
`;

export default Input;
