import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.palette.background.default};
  padding: 1.5rem;
  @media (max-width: 768px) { 
    padding: 0;
  }
`;

const LayoutContent = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { LayoutContainer, LayoutContent };
