import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
`;

export const TextWrapper = styled.div`
  padding: 10px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  font-size: 10px;
  &:first-child() {
    margin-bottom: 5px;
  }
`;
