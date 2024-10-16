import styled from 'styled-components'

export const SnackbarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  padding: 16px;
  border-radius: 4px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`

export const SnackbarMessage = styled.span`
  display: inline-block;
`
