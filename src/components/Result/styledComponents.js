import styled from 'styled-components'

export const ResultContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultImageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const EachImageContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 450;
`

export const Image = styled.img`
  width: 90%;
`

export const GameStatus = styled.p`
  color: #ffffff;
  font-size: 30px;
`

export const PlayAgainBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Bree Serif';
  font-weight: bold;
`
