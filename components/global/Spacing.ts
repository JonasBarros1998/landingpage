import styled from 'styled-components';


const Padding = styled.div`
  padding: ${(props: {padding: string}) => props.padding};
`;

export {Padding};