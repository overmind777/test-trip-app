import React from 'react';
import { useTrips } from '../../hooks/useTrips';

import styled from 'styled-components';

const Button = () => {
  const { openModal } = useTrips();

  return (
    <ButtonStyled onClick={openModal}>
      <p>+</p>
      <p>Add trip</p>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: 200px;
  min-width: 200px;
  height: 200px;
  background-color: gray;
  text-align: center;
  /* position: sticky;
  right: 0; */

  cursor: pointer;
`;

export default Button;
