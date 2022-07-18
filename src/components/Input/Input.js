import { Container, Icon, Input as StyledInput } from './Input.styled'


export const Input = (props) => {
  return (
    <Container>
      <Icon className='fa-solid fa-magnifying-glass'></Icon>
      <StyledInput {...props} />
    </Container>
  )
}