import axios from 'axios';

const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = '8E5KWNA3YK6BVYNDN5YSQ28Q7';

axios.defaults.baseURL = BASE_URL;

export const fetchWeatherDataDate = async query => {
  const { location, startDate, endDate } = query;
  const { data } = await axios.get(`${location}/${startDate}/${endDate}`, {
    params: {
      unitGroup: 'metric',
      include: 'days',
      key: API_KEY,
      contentType: 'json',
    },
  });
  return data;
};

export const fetchWeatherDataToday = async query => {
  try {
    const city = query.location;
    const { data } = await axios.get(`${city}/today`, {
      params: {
        unitGroup: 'metric',
        include: 'days',
        key: API_KEY,
        contentType: 'json',
      },
    });
  
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
