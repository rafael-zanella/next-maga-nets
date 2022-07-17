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
      max-height: 150px;
      height: 100%;
    }
  }
`

export const Title = styled.h3`
  position: absolute;
  left: 0; right: 0;
  top: 160px;
  padding: 0 10px;
`

export const Price = styled.h3`
  position: absolute;
  left: 0; right: 0;
  bottom: 0px;
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

export const Remove = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  p {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0;
    line-height: 0;
    font-weight: 500;
  }
`