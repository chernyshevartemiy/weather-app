import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

type ILayout = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout:React.FC<ILayout> = ({theme, setTheme}) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <Outlet />
    </>
  );
};

export {Layout};