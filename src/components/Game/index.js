import {Component} from 'react'
import {
  BackgroundContainer,
  ScoreContainer,
  ItemsContainer,
  Item,
  Score,
  ScoreHeading,
  ScoreCount,
  ChoicesContainer,
  Choice,
  ChoiceButton,
  ChoiceImage,
  GameContainer,
} from './styledComponents'
import ReactPopup from '../Rules'
import Result from '../Result'

class Game extends Component {
  state = {
    isGameContinue: true,
    activeImg: '',
    opponentImg: '',
    score: 0,
    gameStatus: '',
  }

  renderScoreContainer = () => {
    const {score} = this.state
    return (
      <ScoreContainer>
        <ItemsContainer>
          <Item>
            ROCK <br /> PAPER <br /> SCISSORS
          </Item>
        </ItemsContainer>
        <Score>
          <ScoreHeading>Score</ScoreHeading>
          <ScoreCount>{score}</ScoreCount>
        </Score>
      </ScoreContainer>
    )
  }

  updateOnChoiceClick = activeChoice => {
    const {choicesList} = this.props
    const n = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[n]
    this.setState({isGameContinue: false})
    if (activeChoice.id === 'ROCK' && randomChoice.id === 'SCISSORS') {
      this.setState(prevState => ({
        activeImg: activeChoice.imageUrl,
        opponentImg: randomChoice.imageUrl,
        score: prevState.score + 1,
        gameStatus: 'YOU WON',
      }))
    } else if (activeChoice.id === 'PAPER' && randomChoice.id === 'ROCK') {
      this.setState(prevState => ({
        activeImg: activeChoice.imageUrl,
        opponentImg: randomChoice.imageUrl,
        score: prevState.score + 1,
        gameStatus: 'YOU WON',
      }))
    } else if (activeChoice.id === 'SCISSORS' && randomChoice.id === 'PAPER') {
      this.setState(prevState => ({
        activeImg: activeChoice.imageUrl,
        opponentImg: randomChoice.imageUrl,
        score: prevState.score + 1,
        gameStatus: 'YOU WON',
      }))
    } else if (activeChoice.id === randomChoice.id) {
      this.setState(prevState => ({
        activeImg: activeChoice.imageUrl,
        opponentImg: randomChoice.imageUrl,
        score: prevState.score + 0,
        gameStatus: 'IT IS DRAW',
      }))
    } else {
      this.setState(prevState => ({
        activeImg: activeChoice.imageUrl,
        opponentImg: randomChoice.imageUrl,
        score: prevState.score - 1,
        gameStatus: 'YOU LOSE',
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({
      isGameContinue: true,
      activeImg: '',
      opponentImg: '',
      gameStatus: '',
    })
  }

  renderGameContainer = () => {
    const {choicesList} = this.props
    return (
      <GameContainer>
        <ChoicesContainer>
          {choicesList.map(eachChoice => (
            <Choice key={eachChoice.id}>
              <ChoiceButton
                data-testid={`${eachChoice.id.toLowerCase()}Button`}
                onClick={() => this.updateOnChoiceClick(eachChoice)}
                type="button"
              >
                <ChoiceImage src={eachChoice.imageUrl} alt={eachChoice.id} />
              </ChoiceButton>
            </Choice>
          ))}
        </ChoicesContainer>
      </GameContainer>
    )
  }

  render() {
    const {isGameContinue, activeImg, opponentImg, gameStatus} = this.state
    const {choicesList} = this.props
    return (
      <BackgroundContainer>
        {this.renderScoreContainer()}
        {isGameContinue ? (
          this.renderGameContainer()
        ) : (
          <Result
            activeImg={activeImg}
            opponentImg={opponentImg}
            gameStatus={gameStatus}
            choicesList={choicesList}
            onPlayAgain={this.onPlayAgain}
          />
        )}
        <ReactPopup />
      </BackgroundContainer>
    )
  }
}

export default Game
