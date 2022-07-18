import styled from 'styled-components'

export const Container = styled.div` 
  width: 100%;
  height: 150px;
  padding: 30px 0;

  border-top: 6px solid #37104f;
  background-color: #5a2d82;
  color: white;
  font-weight: 500;
  font-size: 16px;
`

export const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding: 0;
  line-height: 30px;
`

export const Infos = styled.div`
  margin: 0;
  line-height: 30px;
  
  > div {
    display: inline-block;
    width: 33%;
    cursor: pointer;

    p {
      display: inline;
      margin-left: 5px;

      @media screen and (max-width: 909px){
        display: none;
      }
    }
  }
`

export const City = styled.div`
  text-align: left;
`

export const Phone = styled.div`
  text-align: center;
`

export const Wishlist = styled.div`
  text-align: right;
`

export const InputArea = styled.div`
`
