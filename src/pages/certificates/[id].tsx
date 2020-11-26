import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { dataFetch } from '../../_mock/dataFetch';
import { Student } from '../../models';
import * as S from '../../styles/pages/CertificateStyled';

interface StudentProps {
  student: Student
}

const Certificate: React.FC<StudentProps> = ({ student }) => (
  <S.CertificateWrapper>
    <Head>
      <title>
        Estartando Devs | Certificado
        {' '}
        {student.data.fullName}
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <S.CertificateTitle>Certificado</S.CertificateTitle>
    <S.CertificateText>
      Certificamos que o aluno
      {' '}
      <b>
        {student.data.fullName}
        {' '}
      </b>
      {' '}
      concluiu, com êxito, o curso de
      {' '}
      <b>
        {student.data.course}
        {' '}
      </b>
      oferecido por Estartando Devs.
    </S.CertificateText>
  </S.CertificateWrapper>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await dataFetch();
  const students = res.data;

  const paths = students.map((student) => ({
    params: {
      id: student.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await dataFetch();
  const students = res.data;

  const student = students.find((data) => data.id === params?.id);

  return { props: { student } };
};

export default Certificate;
