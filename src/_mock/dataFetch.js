import students from './students2021.json';

export const dataFetch = () => Promise.resolve({
  status: 200,
  data: students,
});
