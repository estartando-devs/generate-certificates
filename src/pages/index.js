import { dataFetch } from '../_mock/dataFetch';
import HomePage from '../components/modules/_HomePage/_HomePage';

const Home = (props) => HomePage(props);

export const getStaticProps = async () => {
  const res = await dataFetch();
  const students = res.data;

  return { props: { students } };
};

export default Home;
