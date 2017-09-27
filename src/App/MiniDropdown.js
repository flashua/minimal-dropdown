import React, { cloneElement, Component } from 'react'
import { Overlay } from 'react-overlays'
import styled from 'styled-components'

const get = (target, direction) => (target && target.getBoundingClientRect()[direction]) || 0

export const Content = styled.div`
  z-index: 99;
  position: absolute;
  background: white;
  box-shadow: 0 0 11.4px 0.6px rgba(0, 0, 0, 0.2);
  left: ${props => get(props.target, 'left')}px !important;
  top: ${props => get(props.target, 'botttom')}px !important;
`

export default class MiniDropdown extends Component {
  state = {
    show: false,
    target: null,
  }

  onClick = () => !this.props.disabled && this.setState({ show: !this.state.show })
  onHide = () => this.setState({ show: false })
  saveRef = target => this.setState({ target })

  render() {
    const { children, disabled, trigger } = this.props
    const { show, target } = this.state
    const { onClick, onHide, saveRef } = this
    const ref = trigger.styledComponentId ? { innerRef: saveRef } : { ref: saveRef }

    return (
      <div>
        {cloneElement(trigger, { disabled, onClick, ...ref })}
        <Overlay rootClose placement="bottom" target={target} show={show} onHide={onHide}>
          <Content target={target}>{children}</Content>
        </Overlay>
      </div>
    )
  }
}
