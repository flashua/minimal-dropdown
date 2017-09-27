import styled from 'styled-components'

const get = (target, direction) => (target && target.getBoundingClientRect()[direction]) || 0

export const DropdownContent = styled.div`
  z-index: 99;
  position: absolute;
  background: white;
  box-shadow: 0 0 11.4px 0.6px rgba(0, 0, 0, 0.2);
  left: ${props => get(props.target, 'left')}px !important;
  top: ${props => get(props.target, 'botttom')}px !important;
`
