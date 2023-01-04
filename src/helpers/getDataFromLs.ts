import { Weather } from '../store/slices/savedSlice';

const getDataFromLs = () => {
  const data: string | null = localStorage.getItem('saved');
  if (data) {
    return JSON.parse(data) as Weather[];
  } else {
    return [];
  }
};

export { getDataFromLs };
