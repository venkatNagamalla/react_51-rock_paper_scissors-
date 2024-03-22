import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  background-color: transparent;
  border: 1.5px solid #ffffff;
  padding: 0px 20px 0px 20px;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60%;
    align-self: center;
  }
`
export const ItemsContainer = styled.div`
  padding: 0px;
  margin: 0px;
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Item = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  margin: 1px;
  font-size: 16px;
  font-weight: 400;
`

export const Score = styled.div`
  height: 85%;
  width: 90px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Bree Serif';
  padding: 0px;
  font-weight: 550;
  margin: 0px;
`
export const ScoreCount = styled.p`
  color: #223a5f;
  font-size: 35px;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 0px;
  padding: 0px;
`

export const GameContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

export const ChoicesContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 38%;
  }
`

export const Choice = styled.li`
  padding: 0px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`
export const ChoiceButton = styled.button`
  width: 80%;
  height: 80%;
  border-radius: 100%;
  padding: 0px;
  margin: 0px;

  background: transparent;
  border: none;
  cursor: pointer;
`

export const ChoiceImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  object-fit: cover;
  object-position: center;
`
