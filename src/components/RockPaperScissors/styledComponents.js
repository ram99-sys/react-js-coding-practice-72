import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}`

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 200;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
`
export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  width: 60%;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  justify-content: space-between;
`
export const Headings = styled.div`
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 30px;
  border-radius: 10px;
  margin: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ScoreText = styled.p`
  font-size: 20px;
  color: #223a5f;
  margin: 0px;
  font-weight: 500;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 32px;
  font-family: 'Roboto';
`

export const GameItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const GameContainer = styled.div`
  margin-top: 100px;
  width: 40%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const ResultsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 150px;
`
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const WinOrLoseText = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`
export const CustomButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 20px;
  font-family: 'Bree Serif';
  font-weight: 500;
`
export const RulesButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const RulesImage = styled.img`
  height: 500px;
  width: 600px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
