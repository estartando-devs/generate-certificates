import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import * as S from '../../styles/pages/CertificateStyled';
import { api } from '../../services/api';
import { useDownloadContainerAsImage } from '../../hooks/useDownloadContainerAsImage';
import { Button } from '../../components/elements';
import { NextSeo } from 'next-seo';
import capitalize from '../../utils/capitalize';

interface StudentProps {
  student: Student;
}

const coursesInfos = {
  frontend: {
    title: `Desenvolvimento <span>Front-End</span>`,
    techs: '<HTML5, CSS3, JAVASCRIPT, GIT, Styled Components, Scrum, REACT JS & Treinamento de Soft Skills>',
    color: '#0d6f61',
  },
  design: {
    title: `Design <span>UX/UI</span>`,
    techs: '<Design Thinking, Produtos Digitais, Scrum & Treinamento de Soft Skills>',
    color: '#45408e',
  },
  backend: {
    title: `Desenvolvimento <span>Backend</span>`,
    techs: '<JAVASCRIPT, GIT, NodeJS, SQL e NoSQL, Banco de Dados, API REST, Docker, Testes unitários, Solid, Scrum & Treinamento de Soft Skills>',
    color: '#1e6f7a',
  },
};

type TCourseOptions = 'frontend' | 'design' | 'backend';

const keyByCourse: Record<Course, CourseKeys> = {
  'Desenvolvimento Web': 'frontend',
  'Desenvolvimento Backend': 'backend',
  'Design UI/UX': 'design',
};

const Certificate = ({ student }: StudentProps) => {
  const courseOption: TCourseOptions = keyByCourse?.[student.data.course];

  const courseSelected = coursesInfos?.[courseOption] ?? {};

  const { color, techs, title } = courseSelected;

  const {
    containerRef,
    handleDownloadImage,
    loading
  } = useDownloadContainerAsImage();

  useEffect(() => {
    if(containerRef.current && !loading){
      containerRef.current.style.boxShadow = `0px 0px 30px ${color}`;
    }
  }, [loading])

  return (
    <>
      <NextSeo
        title={`${student?.data?.fullName?.toLocaleUpperCase()}`}
        description="Agora você pode compartilhar seu certificado. Não esqueça de nos marcar."
      />
      <S.CertificateWrapper >
        <S.CertificateContent color={color} ref={containerRef}>
          <S.Logo
            src="/svg/logo-fundo-transparente.svg"
            alt="logo Estartando Devs"
          />
          <S.TextContent>
            <S.Text>Certificamos que</S.Text>
            <S.HighlightedText color={color}>
              {capitalize(student.data.fullName)}
            </S.HighlightedText>
            <S.Text>concluiu com êxito o curso de</S.Text>
            <S.Text weight="500" fontSize="1.93rem">
              <div
                dangerouslySetInnerHTML={{ __html: title }}
                className="title-course"
              ></div>
            </S.Text>
            <S.Text>{techs}</S.Text>
            <S.Text>
              com carga horária de 120 horas, com início em 12/04/2022 e término
              em 12/11/2022.
            </S.Text>
          </S.TextContent>
          <S.DescriptionText>
            Rio de Janeiro, 12 de Novembro de 2022.
          </S.DescriptionText>
        </S.CertificateContent>
      </S.CertificateWrapper>
      {loading && (
        <S.Loading>
          <div>
            <S.Logo
              src="/svg/logo-fundo-transparente.svg"
              alt="logo Estartando Devs"
            />
          </div>
        </S.Loading>
      )}
      <Button onClick={handleDownloadImage}>Exportar</Button>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const students = await api<Array<Student>>(
    '/subscribe?graduated=true&fields=fullName,email,course'
  );

  const paths = students.map((student) => ({
    params: {
      id: student.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const students = await api<Array<Student>>(
    '/subscribe?graduated=true&fields=fullName,email,course'
  );

  const student = students.find((data) => data.id === params?.id);

  return { props: { student }, revalidate: 60 };
};

export default Certificate;
