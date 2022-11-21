import { api } from '../services/api';

export { Home as default } from '../components/modules/_HomePage/_HomePage';

export const getServerSideProps = async () => {
  const students = await api<Array<Student>>('/subscribe?graduated=true&fields=fullName,email,course');

  return { props: { students } };
};

