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
  const [theme, setTheme] = React.useState<boolean>(false);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (response: Location) => {
        dispatch(getWeather(response.coords));
      },
      (error: any) => {
        const coords = {
          latitude: 49.450001,
          longitude: 30.523333,
        };
        dispatch(getWeather(coords));
      }
    );
  }, []);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
    </>
  );
};

export default App;
