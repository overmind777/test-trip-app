import Modal from './components/Modal/Modal';
import TripList from './components/TripList/TripList';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import Input from './components/Input/Input';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import { useTrips } from './hooks/useTrips';

import { AppWrapper, LeftWrapper, Span, Title } from './style/Global.styled';

function App() {
  const { isModalOpen } = useTrips();
  return (
    <>
      <AppWrapper style={{ opacity: isModalOpen ? 0 : 1 }}>
        <LeftWrapper>
          <Title>
            Weather <Span>Forecast</Span>
          </Title>
          <Input />
          <TripList />
          <WeeklyForecast />
        </LeftWrapper>
        <WeatherForecast />
      </AppWrapper>
      <Modal />
    </>
  );
}

export default App;
