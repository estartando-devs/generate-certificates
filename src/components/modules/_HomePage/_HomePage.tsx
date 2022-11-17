import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as S from '../../../styles/pages/HomePageStyled';

interface HomeProps {
  students: Array<Student>;
}

const sortAlphabetically = (a: string, b: string) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

export const Home = ({ students }: HomeProps) => {
  const studentsOrdened = students.sort((a, b) =>
    sortAlphabetically(a.data.fullName, b.data.fullName)
  );

  const frontendStudents = studentsOrdened.filter(
    (student) => student.data.course === 'Desenvolvimento Web'
  );

  const backendStudents = studentsOrdened.filter(
    (student) => student.data.course === 'Desenvolvimento Web'
  );

  const designStudents = studentsOrdened.filter(
    (student) => student.data.course === 'Design UI/UX'
  );

  return (
    <S.HomeWrapper className="container">
      <Head>
        <title>Estartando Devs | Lista Alunos</title>
      </Head>

      <S.PageTitle variant="h1">
        Certificados Estartando Devs - Edição 2021
      </S.PageTitle>

      <S.BoxAreas>
        <S.ClassBox>
          <S.BoxTitle variant="h2">Design UI/UX</S.BoxTitle>
          <S.ListArea>
            {designStudents.map((student) => (
              <Link key={student.id} href={`/certificates/${student.id}`}>
                <S.LinkName>{student.data.fullName}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>

        <S.ClassBox>
          <S.BoxTitle variant="h2">Desenvolvimento Web</S.BoxTitle>
          <S.ListArea>
            {frontendStudents.map((student) => (
              <Link key={student.id} href={`/certificates/${student.id}`}>
                <S.LinkName>{student.data.fullName}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>
        
        <S.ClassBox>
          <S.BoxTitle variant="h2">Desenvolvimento Backend</S.BoxTitle>
          <S.ListArea>
            {backendStudents.map((student) => (
              <Link key={student.id} href={`/certificates/${student.id}`}>
                <S.LinkName>{student.data.fullName}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>
      </S.BoxAreas>
    </S.HomeWrapper>
  );
};

