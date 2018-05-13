import React from 'react'
import { render } from 'react-dom'
import MiniDropdown from './MiniDropdown'

const root = document.getElementById('root')
const button = <button>Open</button>
const content = 'test'
const dropdown = <MiniDropdown component={button}>{content}</MiniDropdown>

render(dropdown, root)
