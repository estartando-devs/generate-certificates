import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { dataFetch } from '../../_mock/dataFetch';
import { Student } from '../../models';
import * as S from '../../styles/pages/CertificateStyled';
import logo from '../../assets/logo.png';

interface StudentProps {
  student: Student;
}

const coursesInfos = {
  dev: {
    title: `Desenvolvimento <span>Front-End</span>`,
    techs: '<HTML5, CSS3, JAVASCRIPT, GIT, SASS e REACT JS>',
    color: '#00bfa6',
  },
  design: {
    title: `Design <span>UX/UI</span>`,
    techs: '<Design Thinking e Produtos Digitais>',
    color: '#6C63FF',
  },
};

type TCourseOptions = 'dev' | 'design';

const Certificate: React.FC<StudentProps> = ({ student }) => {
  const courseOption: TCourseOptions =
    student.data.course === 'Desenvolvimento Web' ? 'dev' : 'design';
  const courseSelected = coursesInfos[courseOption];

  const { color, techs, title } = courseSelected;

  return (
    <S.CertificateWrapper>
      <Head>
        <title>
          Estartando Devs | Certificado
          {student.data.fullName}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.CertificateContent color={color}>
        <S.Logo src={logo} alt="" />
        <S.TextContent>
          <S.Text>Certificamos que</S.Text>
          <S.HighlightedText color={color}>
            {student.data.fullName}
          </S.HighlightedText>
          <S.Text>concluiu com êxito o curso de</S.Text>
          <S.Text weight="500" fontSize="1.93rem">
            <div dangerouslySetInnerHTML={{ __html: title }} className="title-course"></div>
          </S.Text>
          <S.Text>
            {techs}
          </S.Text>
          <S.Text>
            com carga horária de 72 horas, com início em 18/08/2020 e término em
            19/12/2020.
          </S.Text>
        </S.TextContent>
        <S.DescriptionText>
          Rio de Janeiro, 19 de Dezembro de 2020.
        </S.DescriptionText>
      </S.CertificateContent>
    </S.CertificateWrapper>
  );
};

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
