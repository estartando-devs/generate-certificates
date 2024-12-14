import { students } from '_mock/students2022';
import { GetServerSideProps } from 'next';

export { Home as default } from '../components/modules/_HomePage/_HomePage';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=120'
  );

  return { props: { students } };
};
