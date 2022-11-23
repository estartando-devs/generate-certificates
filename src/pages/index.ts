import { GetServerSideProps } from 'next';
import { api } from '../services/api';

export { Home as default } from '../components/modules/_HomePage/_HomePage';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const students = await api<Array<Student>>('/subscribe?graduated=true&fields=fullName,email,course');

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=120'
  )
  
  return { props: { students } };
};

