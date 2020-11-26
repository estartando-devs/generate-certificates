import styled from 'styled-components';

export const CertificateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CertificateTitle = styled.h1`
  text-decoration: underline;
  margin-bottom: 1.75rem;
  font-family: ${(props) => props.theme.typography.h1?.fontFamily};
  font-size: ${(props) => props.theme.typography.h1?.fontSize};
`;

export const CertificateText = styled.span`
  padding: 0 3.75rem;
  text-align: center;
  b {
    color: green
  }
`;
