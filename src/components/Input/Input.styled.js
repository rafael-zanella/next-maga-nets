import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`

export const Icon = styled.span`
  display: inline-block;
  color: grey;
  width: 10%;
  text-align: center;
  cursor: pointer;
`

export const Input = styled.input`
  display: inline-block;
  width: 90%;
  height: 100%;
  border: none;
  padding: 0 5px;

  ::placeholder {
    font-weight: 700;
  }
`

