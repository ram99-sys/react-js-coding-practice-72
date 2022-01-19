import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  AppContainer,
  HeaderContainer,
  Headings,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
  GlobalStyle,
  GameContainer,
  GameItemsContainer,
  ResultsContainer,
  Image,
  ImageContainer,
  Results,
  WinOrLoseText,
  CustomButton,
  RulesButtonContainer,
  RulesImage,
  CloseButton,
  RulesContainer,
} from './styledComponents'

import './index.css'

import GameItem from '../GameItem'

const userGameIds = {
  initial: 'INITIAL',
  paper: 'PAPER',
  rock: 'ROCK',
  scissors: 'SCISSORS',
}

const machineUserIds = {
  initial: 'INITIAL',
  paper: 'PAPER',
  rock: 'ROCK',
  scissors: 'SCISSORS',
}

class RockPaperScissors extends Component {
  state = {
    isGameRunning: true,
    userGameStatus: userGameIds.initial,
    machineGameStatus: machineUserIds.initial,
    score: 0,
    resultText: '',
  }

  findGameResult = () => {
    const {userGameStatus, machineGameStatus} = this.state
    console.log(userGameStatus, machineGameStatus)
    if (
      userGameStatus === userGameIds.paper &&
      machineGameStatus === machineUserIds.rock
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log('YOU WIN')
      this.setState({resultText: 'YOU WON'})
    } else if (
      userGameStatus === userGameIds.scissors &&
      machineGameStatus === machineUserIds.rock
    ) {
      this.setState(prevState => ({score: prevState.score - 1}))
      console.log('YOU LOSE')
      this.setState({resultText: 'YOU LOSE'})
    } else if (
      userGameStatus === userGameIds.rock &&
      machineGameStatus === machineUserIds.paper
    ) {
      this.setState(prevState => ({score: prevState.score - 1}))
      console.log('YOU LOSE')
      this.setState({resultText: 'YOU LOSE'})
    } else if (
      userGameStatus === userGameIds.scissors &&
      machineGameStatus === machineUserIds.paper
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log('YOU WIN')
      this.setState({resultText: 'YOU WON'})
    } else if (
      userGameStatus === userGameIds.rock &&
      machineGameStatus === machineUserIds.scissors
    ) {
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log('YOU WIN')
      this.setState({resultText: 'YOU WON'})
    } else if (
      userGameStatus === userGameIds.paper &&
      machineGameStatus === machineUserIds.scissors
    ) {
      this.setState(prevState => ({score: prevState.score - 1}))
      console.log('YOU LOSE')
      this.setState({resultText: 'YOU LOSE'})
    } else {
      console.log('DRAW')
      this.setState({resultText: 'IT IS DRAW'})
    }
  }

  clickedGameButton = id => {
    const {choicesList} = this.props
    if (id === 'PAPER') {
      this.setState({userGameStatus: userGameIds.paper}, this.findGameResult)
    } else if (id === 'ROCK') {
      this.setState({userGameStatus: userGameIds.rock}, this.findGameResult)
    } else {
      this.setState({userGameStatus: userGameIds.scissors}, this.findGameResult)
    }
    // console.log(id)
    const clickedImage = choicesList.find(eachObject => eachObject.id === id)
    console.log(clickedImage)
    const randomImage =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(randomImage)
    const randomImageId = randomImage.id
    if (randomImageId === 'PAPER') {
      this.setState({machineGameStatus: machineUserIds.paper})
    } else if (randomImageId === 'ROCK') {
      this.setState({machineGameStatus: machineUserIds.rock})
    } else {
      this.setState({machineGameStatus: machineUserIds.scissors})
    }
    this.setState({isGameRunning: false})
    // const gameResult = this.findGameResult()
    // console.log(gameResult)
  }

  renderImagesList = () => {
    const {choicesList} = this.props
    return (
      <GameItemsContainer>
        {choicesList.map(eachChoice => (
          <GameItem
            key={eachChoice.id}
            gameDetails={eachChoice}
            clickedGameButton={this.clickedGameButton}
          />
        ))}
      </GameItemsContainer>
    )
  }

  userSelectedImage = () => {
    const {userGameStatus} = this.state
    const {choicesList} = this.props
    const userSelectedOption = choicesList.find(
      eachObject => eachObject.id === userGameStatus,
    )
    const {imageUrl} = userSelectedOption
    // console.log(imageUrl)
    return imageUrl
  }

  machineSelectedImage = () => {
    const {machineGameStatus} = this.state
    const {choicesList} = this.props
    const machineSelectedOption = choicesList.find(
      eachObject => eachObject.id === machineGameStatus,
    )
    const {imageUrl} = machineSelectedOption
    // console.log(imageUrl)
    return imageUrl
  }

  onClickResetButton = () => {
    this.setState({
      isGameRunning: true,
      userGameStatus: userGameIds.initial,
      machineGameStatus: machineUserIds.initial,
      resultText: '',
    })
  }

  renderScore = () => {
    const {resultText} = this.state
    const userImageUrl = this.userSelectedImage()
    console.log(userImageUrl)
    const machineImageUrl = this.machineSelectedImage()
    console.log(machineImageUrl)

    return (
      <>
        <ResultsContainer>
          <ImageContainer>
            <Heading>YOU</Heading>
            <Image src={userImageUrl} alt="your choice" />
          </ImageContainer>
          <ImageContainer>
            <Heading>OPPONENT</Heading>
            <Image src={machineImageUrl} alt="opponent choice" />
          </ImageContainer>
        </ResultsContainer>
        <Results>
          <WinOrLoseText>{resultText}</WinOrLoseText>
          <CustomButton type="button" onClick={this.onClickResetButton}>
            PLAY AGAIN
          </CustomButton>
        </Results>
      </>
    )
  }

  render() {
    const {isGameRunning, score} = this.state
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <HeaderContainer>
            <Headings>
              <Heading>
                ROCK<span>PAPER</span>
                <span>SCISSORS</span>
              </Heading>
            </Headings>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </HeaderContainer>
          <GameContainer>
            {isGameRunning ? this.renderImagesList() : this.renderScore()}
          </GameContainer>
          <RulesButtonContainer>
            <div className="popup-container">
              <Popup
                modal
                trigger={<CustomButton type="button">Rules</CustomButton>}
              >
                {close => (
                  <RulesContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      <RiCloseLine font-size={30} />
                    </CloseButton>
                    <RulesImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </RulesContainer>
                )}
              </Popup>
            </div>
          </RulesButtonContainer>
        </AppContainer>
      </>
    )
  }
}

export default RockPaperScissors
