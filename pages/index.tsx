import styled, { StyledComponent } from 'styled-components'

const Title: StyledComponent<"h1", any, {}, never> = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>Minha Pagina</Title>
}
