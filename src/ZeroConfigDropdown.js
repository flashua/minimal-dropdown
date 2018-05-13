import React, { cloneElement } from 'react'
import { Overlay } from 'react-overlays'
import { element, bool, any } from 'prop-types'
import { compose, withState, withHandlers, defaultProps, setPropTypes } from 'recompose'

const Content = ({ children }) => <div style={{ position: 'absolute' }} children={children} />

const ZeroConfigDropdown = ({ component, disabled, onClick, ref, target, show, onHide, children }) => (
  <div>
    {cloneElement(component, { disabled, onClick, ref })}
    <Overlay rootClose placement="bottom" {...{ target, show, onHide }}>
      <Content children={children} />
    </Overlay>
  </div>
)

const enhanceDropdown = compose(
  setPropTypes({
    component: element.isRequired,
    disabled: bool,
    children: any,
  }),
  defaultProps({
    disabled: false,
    children: null,
  }),
  withState('show', 'setShow', false),
  withState('target', 'ref', null),
  withHandlers({
    onClick: ({ disabled, setShow, show }) => () => !disabled && setShow(!show),
    onHide: ({ show, setShow }) => () => setShow(!show),
  }),
)

export default enhanceDropdown(ZeroConfigDropdown)
