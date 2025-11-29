import React from 'react';
import Link from 'next/link';
import * as S from '../../../styles/pages/HomePageStyled';
import capitalize from '../../../utils/capitalize';

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
    (student) => student.data.course === 'Desenvolvimento Backend'
  );

  const designStudents = studentsOrdened.filter(
    (student) => student.data.course === 'Design UI/UX'
  );

  return (
    <S.HomeWrapper className="container">
      <S.PageTitle variant="h1">
        Certificados Estartando Devs - Edição 2025
      </S.PageTitle>

      <S.BoxAreas>
        <S.ClassBox>
          <S.BoxTitle variant="h2">Design UI/UX</S.BoxTitle>
          <S.ListArea>
            {designStudents.map((student) => (
              <Link key={student.id} href={`/certificados/${student.id}`}>
                <S.LinkName>{capitalize(student.data.fullName)}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>

        <S.ClassBox>
          <S.BoxTitle variant="h2">Desenvolvimento Web</S.BoxTitle>
          <S.ListArea>
            {frontendStudents.map((student) => (
              <Link key={student.id} href={`/certificados/${student.id}`}>
                <S.LinkName>{capitalize(student.data.fullName)}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>
        
        <S.ClassBox>
          <S.BoxTitle variant="h2">Desenvolvimento Backend</S.BoxTitle>
          <S.ListArea>
            {backendStudents.map((student) => (
              <Link key={student.id} href={`/certificados/${student.id}`}>
                <S.LinkName>{capitalize(student.data.fullName)}</S.LinkName>
              </Link>
            ))}
          </S.ListArea>
        </S.ClassBox>
      </S.BoxAreas>
    </S.HomeWrapper>
  );
};

