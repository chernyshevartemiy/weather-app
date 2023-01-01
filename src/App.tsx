import React from 'react';
import { getWeather } from './async/getWeather';
import { Header } from './components/Header';
import { useAppDispatch } from './hooks/hooks';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Saved } from './components/Saved';
import { About } from './pages/About';

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
          latitude: 37.450001,
          longitude: 12.523333,
        };
        dispatch(getWeather(coords));
      }
    );
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route index element={<Home theme={theme} />} />
        <Route path='saved' element={<Saved/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  );
};

export default App;
