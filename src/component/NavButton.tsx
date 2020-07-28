import { Button } from 'grommet'
import styled from 'styled-components'
export const NavButton = styled(Button)`
    border: unset;
    border-radius: unset;
    color: white;
    font-weight: normal;
    height: 3rem;
    &:hover {
      border-bottom: solid darkorange 3px;
      box-shadow: unset;
    }
    &:active {
      border-bottom: solid darkorange 3px;
      box-shadow: unset;
    }
    &:focus {
      border-bottom: solid darkorange 3px;
      box-shadow: unset;
    }
`
