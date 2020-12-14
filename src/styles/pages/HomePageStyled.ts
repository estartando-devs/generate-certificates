import styled from 'styled-components';
import media from 'styled-media-query';
import { Typography } from '../../components/elements';

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled(Typography)`
  margin: ${(props) => props.theme.margin?.small} 0;
`;

export const BoxAreas = styled.div`
  max-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 3.75rem;
  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    padding: 1.75rem;
  `}
`;

export const DesingBox = styled.div`
  border: solid 2px ${(props) => props.theme.palette.primary.dark};
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  max-height: 90vh;
  overflow: hidden auto;
  width: 100%;
`;

export const DevelopmentBox = styled.div`
  border: solid 2px ${(props) => props.theme.palette.primary.dark};
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  max-height: 90vh;
  overflow: hidden auto;
  width: 100%;
`;

export const ClassBox = styled.div`
  border: solid 2px ${(props) => props.theme.palette.primary.dark};
  padding: 1.75rem 2rem;
  border-radius: 1rem;
  max-height: 90vh;
  overflow: hidden auto;
  width: 100%;
`;

export const BoxTitle = styled(Typography)`
  margin-bottom: ${(props) => props.theme.margin?.regular};
`;

export const ListArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const LinkName = styled.p`
  color: ${(props) => props.theme.palette.text.primary};
  transition: color 0.05s ease-in;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.palette.primary.light};
  }
`;
