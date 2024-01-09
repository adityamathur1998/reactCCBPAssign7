import {ListItem, ChoiceButton, ChoiceImg} from './styledComponent'

const GenerateChoices = props => {
  const {choiceDetails, onClickSetUserChoice} = props
  const {id, imageUrl} = choiceDetails

  const onClickUserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <ListItem>
      <ChoiceButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickUserChoice}
      >
        <ChoiceImg src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default GenerateChoices
