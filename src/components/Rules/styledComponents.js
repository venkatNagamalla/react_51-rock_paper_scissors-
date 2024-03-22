import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  width: 60px;
  height: 30px;
  border: none;
  font-size: 15px;
  color: #223a5f;
  border-radius: 3px;
`
export const RulesContainer = styled.div`
  background-color: #ffffff;
  height: 270px;
  display: flex;
  width: 320px;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 500px;
  }
`
export const CloseButton = styled.button`
  background: transparent;
  font-size: 20px;
  align-self: flex-end;
  border: none;
  cursor: pointer;
`
export const PopupImage = styled.img`
  width: 85%;
  height: 85%;
  align-self: center;
`
