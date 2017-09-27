import React, { cloneElement, Component } from 'react'
import { Overlay } from 'react-overlays'

class Content extends Component {
  style = {
    zIndex: 99,
    position: 'absolute',
    background: 'white',
    boxShadow: '0 0 11.4px 0.6px rgba(0, 0, 0, 0.2)',
  }
  render() {
    return (
      <div>
        <div style={this.style}>{this.props.children}</div>
      </div>
    )
  }
}

export default class MiniDropdown extends Component {
  state = {
    show: false,
    target: null,
  }

  onClick = () => !this.props.disabled && this.setState({ show: !this.state.show })
  onHide = () => this.setState({ show: false })
  ref = target => this.setState({ target })
  getRefProp = ({ styledComponentId }) => ({ [styledComponentId ? 'innerRef' : 'ref']: this.ref })

  render() {
    const { children, disabled, trigger } = this.props
    const { show, target } = this.state
    const { onClick, onHide } = this

    return (
      <div>
        {cloneElement(trigger, { disabled, onClick, ...this.getRefProp(trigger) })}
        <Overlay rootClose placement="bottom" target={target} show={show} onHide={onHide}>
          <Content>{children}</Content>
        </Overlay>
      </div>
    )
  }
}
