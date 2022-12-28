import React from 'react';
import { getWeather } from './async/getWeather';
import { Header } from './components/Header';
import { useAppDispatch } from './hooks/hooks';
import { Home } from './pages/Home';

export type Coords = {
  latitude: number;
  longitude: number;
};

type Location = {
  coords: Coords;
  timestamp: number;
};

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  console.log('Update');
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response: Location) => {
        dispatch(getWeather(response.coords));
      },
      (error: any) => {
        const coords = {
          latitude: 50.450001,
          longitude: 30.523333,
        };
        dispatch(getWeather(coords));
        console.log('Permission denied');
      }
    );
  }, []);
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
