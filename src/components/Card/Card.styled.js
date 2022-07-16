import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: block;
  height: 350px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 14px 0px #BFBFBF;
  
  div {
    height: 300px;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    text-align: center;

    img {
      height: 150px;
    }
  }
`

export const Title = styled.h3`
`

export const Price = styled.h3`
  margin-top: 50px;
  color: #b7b702;
`

export const FavContainer = styled.span`
  top: -2px;
  left: 2px;
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 5% 5% 49% 49% / 5% 5% 54% 54%;
  background-color: #212121;

  span {
    position: absolute;
    top: 25%;
    left: 0; right: 0;
    margin: auto;
    text-align: center;
    color: white;
    cursor: pointer;
  }

  span.red {
    color: red;
  }
`