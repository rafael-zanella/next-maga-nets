import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
  background-color: #FFF;
  padding: 0;
  li {
    display: inline;
    font-size: 18px;
    font-weight: 700;

    +li::before{
      content: ' > ';
    }

    a {
      color: #121212;
      text-decoration: none;

      :hover {
        color: #575757;
        text-decoration: underline;
      }
    }
  }
`

export const Item = styled.li`
  
`