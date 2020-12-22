import styled from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import { Typography } from '../../components/elements';

export const CertificateWrapper = styled.div`
  @page {
    size: A4 landscape;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #161616;
  background-image: url(${bg1});
  background-repeat: no-repeat, repeat;
  background-size: 70% 100%;
  font-family: Ubuntu;
  padding: 35px;
  -webkit-print-color-adjust: exact;
  color-adjust: exact !important;
  @media (max-width: 768px) {
    background-size: cover;
    padding: 15px;
  }
`;

export const Logo = styled.img`
  width: 220px;
`;

export const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 35px;
  background: #161616;
  background-image: url(${bg2});
  background-repeat: no-repeat, repeat;
  background-size: 100% 100%;
  border: 2px ${(props) => props.color};
  border-radius: 5px;
  box-shadow: 0px 0px 30px ${(props) => props.color};
  @media (max-width: 768px) {
    background-size: cover;
    padding: 0px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Text = styled(Typography).attrs({
  variant: 'h3',
})`
  margin: 2px 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  .title-course{
    font-weight: ${(props) => props.weight || 300};
    font-size: ${(props)=> props.fontSize};
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    span {
      line-height: 40px;
      color: #161616;
      font-weight: bold;
      text-shadow: 2px 0 0 #d3d3d3, -2px 0 0 #d3d3d3, 0 2px 0 #d3d3d3,
        0 -2px 0 #d3d3d3, 1px 1px #d3d3d3, -1px -1px 0 #d3d3d3, 1px -1px 0 #d3d3d3,
        -1px 1px 0 #d3d3d3;
    }
  }
  
`;

export const HighlightedText = styled(Typography).attrs({
  variant: 'h1',
})`
  color: ${(props) => props.color};
  margin: 12px;
  font-weight: 500;
  text-align: center;
`;

export const DescriptionText = styled(Typography).attrs({
  variant: 'body1',
})`
  text-align: center;
  color: #7b7a7a;
`;
