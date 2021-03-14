import styled from 'styled-components';

const BackgroundColor = styled.div`
background-color: ${(props: {color: string}) => props.color};
`;

export {BackgroundColor};