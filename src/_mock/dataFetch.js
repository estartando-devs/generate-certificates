import students from './students.json';

export const dataFetch = () => Promise.resolve({
  status: 200,
  data: students,
});
