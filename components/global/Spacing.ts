import styled from 'styled-components';


const Padding = styled.div`
  padding: ${(props: {padding: string}) => props.padding};
`;


const Margin = styled.div`
  margin: ${(props: {margin: string}) => props.margin};
`;

export {Padding, Margin};