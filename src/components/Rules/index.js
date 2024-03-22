import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  CloseButton,
  RulesButton,
  RulesContainer,
  PopupImage,
} from './styledComponents'

const ReactPopup = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <PopupImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContainer>
      )}
    </Popup>
  </PopupContainer>
)
export default ReactPopup
