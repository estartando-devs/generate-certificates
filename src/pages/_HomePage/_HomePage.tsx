import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Student } from '../../models';
import * as S from './_HomePageStylde';

interface HomeProps {
  students: Array<Student>
}

const Home: React.FC<HomeProps> = ({ students }) => (
  <S.HomeWrapper className="container">
    <Head>
      <title>Estartando Devs | Lista Alunos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <S.PageTitle variant="h1">
      Season 2020
    </S.PageTitle>

    <S.BoxAreas>
      <S.DesingBox>
        <S.BoxTitle variant="h2">
          Design UI/UX
        </S.BoxTitle>
        <S.ListArea>
          {students.map((student) => student.data.course.includes('Design') && (
          <Link
            key={student.id}
            href={`/certificates/${student.id}`}
          >
            <S.LinkName>
              {student.data.fullName}
            </S.LinkName>
          </Link>
          ))}
        </S.ListArea>
      </S.DesingBox>

      <S.DevelopmentBox>
        <S.BoxTitle variant="h2">
          Desenvolvimento Web
        </S.BoxTitle>
        <S.ListArea>
          {students.map((student) => student.data.course.includes('Desenvolviment') && (
          <Link
            key={student.id}
            href={`/certificates/${student.id}`}
          >
            <S.LinkName>
              {student.data.fullName}
            </S.LinkName>
          </Link>
          ))}
        </S.ListArea>
      </S.DevelopmentBox>
    </S.BoxAreas>
  </S.HomeWrapper>
);

export default Home;
