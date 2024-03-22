import {
  ResultContainer,
  ResultImageContainer,
  EachImageContainer,
  Heading,
  Image,
  GameStatus,
  PlayAgainBtn,
} from './styledComponents'

const Result = props => {
  const {activeImg, onPlayAgain, opponentImg, gameStatus} = props

  const playAgain = () => {
    onPlayAgain()
  }

  return (
    <ResultContainer>
      <ResultImageContainer>
        <EachImageContainer>
          <Heading>YOU</Heading>
          <Image src={activeImg} alt="your choice" />
        </EachImageContainer>
        <EachImageContainer>
          <Heading>OPPONENT</Heading>
          <Image src={opponentImg} alt="opponent choice" />
        </EachImageContainer>
      </ResultImageContainer>
      <GameStatus>{gameStatus}</GameStatus>
      <PlayAgainBtn type="button" onClick={playAgain}>
        Play Again
      </PlayAgainBtn>
    </ResultContainer>
  )
}

export default Result
