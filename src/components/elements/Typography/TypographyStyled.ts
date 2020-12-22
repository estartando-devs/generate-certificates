import styled from 'styled-components';

interface IVariantProps {
  color?: string;
  weight?: string;
  fontSize?: string;
}

const h1 = styled.h1<IVariantProps>`
  font-size: ${(props) => props.fontSize || props.theme.typography.h1?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.h1?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.h1?.fontFamily}`};
  line-height: ${(props) => `${props.theme.typography.h1?.lineHeight}`};
`;

const h2 = styled.h2<IVariantProps>`
  font-size: ${(props) => props.fontSize || props.theme.typography.h2?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.h2?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.h2?.fontFamily}`};
  line-height: ${(props) => `${props.theme.typography.h2?.lineHeight}`};
`;

const h3 = styled.h3<IVariantProps>`
  font-size: ${(props) => props.fontSize || props.theme.typography.h3?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.h3?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.h3?.fontFamily}`};
  line-height: ${(props) => `${props.theme.typography.h3?.lineHeight}`};
`;

const body1 = styled.p<IVariantProps>`
  font-size: ${(props) => props.fontSize || props.theme.typography.body1?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.body1?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.body1?.fontFamily}`};
  line-height: ${(props) => `${props.theme.typography.body1?.lineHeight}`};
`;

const Typographies = {
  h1,
  h2,
  h3,
  body1,
};

export default Typographies;
