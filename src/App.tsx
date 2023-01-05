import React from 'react';
import { getWeather } from './async/getWeather';
import { useAppDispatch } from './hooks/hooks';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';

export type Coords = {
  latitude: number;
  longitude: number;
};

type Location = {
  coords: Coords;
  timestamp: number;
};

const Home = React.lazy(
  () => import(/*webpackChunkName: 'Home' */ './pages/Home')
);
const Saved = React.lazy(
  () => import(/*webpackChunkName: 'Saved' */ './pages/Saved')
);

const Contact = React.lazy(
  () => import(/*webpackChunkName: 'Contact' */ './pages/Contact')
);

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
  React.useEffect(() => {
    document.body.style.backgroundColor = theme ? '#101827' : '#DDDDDD';
  }, [theme]);
  return (
    <Routes>
      <Route path='/' element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route
          index
          element={
            <React.Suspense>
              <Home theme={theme} />
            </React.Suspense>
          }
        />
        <Route
          path='saved'
          element={
            <React.Suspense>
              <Saved theme={theme} />
            </React.Suspense>
          }
        />
        <Route
          path='contact'
          element={
            <React.Suspense>
              <Contact theme={theme} />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
