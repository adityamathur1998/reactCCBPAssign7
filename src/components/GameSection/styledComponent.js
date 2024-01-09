import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`
export const TitleAndScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 8px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 34px;
  color: #ffffff;
  width: 12%;
  margin-left: 24px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%;
  margin-right: 24px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  margin: 0px;
`

export const Score = styled.h1`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 60px;
  margin: 0px;
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChoicesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  list-style-type: none;
  padding: 0px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SelectedOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600px;
`

export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`

export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  padding: 8px 15px 8px 15px;
`

export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  background-color: #ffffff;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  background-color: #ffffff;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`

export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
