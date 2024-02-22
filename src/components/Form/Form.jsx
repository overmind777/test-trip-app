import React, { useState } from 'react';
import { useTrips } from '../../hooks/useTrips';

import {
  FormWrapper,
  ButtonWrapper,
  LabelStyled,
  StyledForm,
  StyledInput,
  SubmitButton,
} from './Form.styled';


const Form = () => {
  const { closeModal, addTrip } = useTrips();

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (city && startDate && endDate) {
      addTrip({ city, startDate, endDate });
      closeModal();
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <LabelStyled htmlFor="city">City</LabelStyled>
        <select
          name="city"
          id="city-select"
          required
          value={city}
          onChange={e => setCity(e.target.value)}
        >
          <option value="" disabled>
            Please select a city
          </option>
          <option value="London">London</option>
          <option value="Berlin">Berlin</option>
          <option value="Rome">Rome</option>
          <option value="Praga">Praga</option>
          <option value="Paris">Paris</option>
        </select>
        <LabelStyled htmlFor="startDate">Start Date</LabelStyled>
        <StyledInput
          name="startDate"
          type="date"
          required
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <LabelStyled htmlFor="endDate">End Date</LabelStyled>
        <StyledInput
          name="endDate"
          type="date"
          required
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <ButtonWrapper>
          <SubmitButton type="button" onClick={closeModal}>
            Cancel
          </SubmitButton>
          <SubmitButton type="submit" >
            Save
          </SubmitButton>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
