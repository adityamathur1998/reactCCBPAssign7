import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GenerateChoices from '../GenerateChoices'

import {
  AppContainer,
  ResponsiveContainer,
  TitleAndScoreContainer,
  Title,
  ScoreContainer,
  ScoreText,
  Score,
  ChoicesContainer,
  GameViewContainer,
  GameResultViewContainer,
  SelectedOptionContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  ResultText,
  PlayAgainButton,
  PopupContainer,
  TriggerButton,
  PopupBody,
  PopUpImage,
  CloseButton,
} from './styledComponent'

const gameStatusConstants = {
  draw: 'DRAW',
  win: 'WIN',
  lost: 'LOST',
  inProgress: 'IN_PROGRESS',
}

class GameSection extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    yourChoice: '',
    opponentChoice: '',
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  onClickSetUserChoice = id => {
    this.setState(
      {yourChoice: id, opponentChoice: this.getOpponentChoice()},
      this.evaluateGame,
    )
  }

  getOpponentChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    console.log(gameChoicesList)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {yourChoice, opponentChoice} = this.state

    if (yourChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (yourChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (yourChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (yourChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    }
  }

  GameResultView = () => {
    const {yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === yourChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>YOU</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your-choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>OPPONENT</GameParticipantText>
            <GameParticipantChoiceImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent-choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === yourChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>YOU</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your-choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>OPPONENT</GameParticipantText>
            <GameParticipantChoiceImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent-choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <ChoicesContainer>
        {choicesList.map(eachChoice => (
          <GenerateChoices
            key={eachChoice.id}
            choiceDetails={eachChoice}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </ChoicesContainer>
    )
  }

  renderGameDrawView = () => {
    const {yourChoice, opponentChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === yourChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    const opponentChoiceObjectList = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>YOU</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your-choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>OPPONENT</GameParticipantText>
            <GameParticipantChoiceImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent-choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.GameResultView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <TitleAndScoreContainer>
            <Title>ROCK PAPER SCISSORS</Title>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </ScoreContainer>
          </TitleAndScoreContainer>
          <GameViewContainer>{this.renderGameView()}</GameViewContainer>
          <PopupContainer>
            <Popup
              modal
              trigger={<TriggerButton type="button">Rules</TriggerButton>}
              closeOnEscape
              window
            >
              {close => (
                <PopupBody>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />

                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </PopupBody>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GameSection
