import React, { useEffect } from 'react';
import * as S from '../../styles/pages/CertificateStyled';
import { useDownloadContainerAsImage } from '../../hooks/useDownloadContainerAsImage';
import { Button } from '../../components/elements';
import { NextSeo } from 'next-seo';
import capitalize from '../../utils/capitalize';
import { students } from '_mock/students2022';
import { useRouter } from 'next/router';


const coursesInfos = {
  frontend: {
    title: `Desenvolvimento <span>Front-End</span>`,
    techs:
      '<HTML5, CSS3, JAVASCRIPT, GIT, SCSS, Scrum, Angular & Treinamento de Soft Skills>',
    color: '#0d6f61',
  },
  design: {
    title: `Design <span>UX/UI</span>`,
    techs:
      '<Design Thinking, Produtos Digitais, Scrum & Treinamento de Soft Skills>',
    color: '#45408e',
  },
  backend: {
    title: `Desenvolvimento <span>Backend</span>`,
    techs:
      '<C#, .NET, Clean Architecture, GIT, SQL e NoSQL, Banco de Dados, API REST, Docker, Testes unitários, Solid, Scrum & Treinamento de Soft Skills>',
    color: '#1e6f7a',
  },
};

type TCourseOptions = 'frontend' | 'design' | 'backend';

const keyByCourse: Record<Course, CourseKeys> = {
  'Desenvolvimento Web': 'frontend',
  'Desenvolvimento Backend': 'backend',
  'Design UI/UX': 'design',
};

const Certificate = () => {
  const router = useRouter()
  const student = students.find((student) => student.id === router.query?.id);

  const {
    containerRef,
    handleDownloadImage,
    loading,
  } = useDownloadContainerAsImage();
  
  useEffect(() => {
    if (containerRef.current && !loading) {
      containerRef.current.style.boxShadow = `0px 0px 30px ${color}`;
    }
  }, [loading]);

  if (!student) return null
   
  const courseOption: TCourseOptions = keyByCourse?.[student.data.course];

  const courseSelected = coursesInfos?.[courseOption] ?? {};

  const { color, techs, title } = courseSelected;
  return (
    <>
      <NextSeo
        title={`${student?.data?.fullName?.toLocaleUpperCase()}`}
        description="Agora você pode compartilhar seu certificado. Não esqueça de nos marcar."
      />
      <S.CertificateWrapper>
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
              em 18/06/2024.
            </S.Text>
          </S.TextContent>
          <S.DescriptionText>
            Rio de Janeiro, 14 de Dezembro de 2024.
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


export default Certificate;
