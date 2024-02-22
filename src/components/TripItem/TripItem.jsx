import React from 'react';
import PropTypes from 'prop-types';

import { Item, TextWrapper } from './TripItem.styled';

const TripItem = ({ onClick, city, start, end, imgUrl }) => {
  const rebuildDate = date => {
    return date.split('-').reverse().join('.');
  };

  return (
    <Item onClick={onClick} style={{ cursor: 'pointer' }}>
      <div>
      </div>
      <img src={imgUrl} alt="img" width="200" height="200" />
      <TextWrapper>
        <p>{city}</p>
        <p>
          {rebuildDate(start)} - {rebuildDate(end)}
        </p>
      </TextWrapper>
    </Item>
  );
};

export default TripItem;


TripItem.propTypes = {
  onClick: PropTypes.func.isRequired, 
  city: PropTypes.string.isRequired, 
  start: PropTypes.string.isRequired, 
  end: PropTypes.string.isRequired, 
  imgUrl: PropTypes.string.isRequired, 
};