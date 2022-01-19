import {GameItemElement, Image, CustomButton} from './styledComponents'

const GameItem = props => {
  const {gameDetails, clickedGameButton} = props
  const {imageUrl, id, value} = gameDetails
  // console.log(value)

  const onClickGameButton = () => {
    clickedGameButton(id)
  }

  return (
    <GameItemElement>
      <CustomButton
        type="button"
        onClick={onClickGameButton}
        data-testid={value}
      >
        <Image src={imageUrl} alt={id} />
      </CustomButton>
    </GameItemElement>
  )
}

export default GameItem
