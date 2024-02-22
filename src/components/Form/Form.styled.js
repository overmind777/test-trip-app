import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyled = styled.label`
  &::before {
    content: '*';
    color: red;
    margin-right: 4px;
  }
`;

export const StyledInput = styled.input`
  width: 400px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    border-color: blue;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 50px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid gray;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    color: white;
    border-color: transparent;
    background-color: #3482f7;
  }

  &:active {
    background-color: #0544a3;
  }
`;
