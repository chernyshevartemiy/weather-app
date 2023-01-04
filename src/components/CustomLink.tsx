import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

type ICustomLink = {
  to: string;
  children: string;
};

export const CustomLink: React.FC<ICustomLink> = ({ to, children }) => {
  const match = useMatch(to);
  const styles = match
    ? 'hover:text-blue-600 transition-all text-sm block pr-4 pl-3 text-blue-600'
    : 'hover:text-blue-600 transition-all text-sm block pr-4 pl-3';
  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};
