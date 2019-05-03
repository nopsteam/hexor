import React from 'react'
import { OffsetPanel, HexPanel, TextPanel } from './panel'
import {
  generateAsciiRepresentationOfHexLines,
  generateOffsetLines,
  generateHexLines,
} from './hexFormatter'
import styled from 'styled-components'
import hexThing from './neo.arch.dialog'
import logo from '../pirate_flag.png'

const HexEditorContainer = styled.div`
  background: #252526
  white-space: nowrap
  left: 0
  right: 0
  top: 0
  bottom: 0
  outline: none
`

const Logo = styled.div`
  display: inline;
  float: right;
  width: 100px;
  height: 100px;
  bottom: 0;
  margin-top: 69px;
`

const LogoImg = styled.img`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 20px;
  right: 20px;
  text-align: center;
`

export const HexEditor = (): React.ReactElement => {
  const offsetLines = generateOffsetLines(hexThing)
  const hexLines = generateHexLines(hexThing)
  const asciiRepresentationOfHexLines = generateAsciiRepresentationOfHexLines(
    hexThing
  )

  return (
    <HexEditorContainer>
      <OffsetPanel lines={offsetLines} />
      <HexPanel lines={hexLines} />
      <TextPanel lines={asciiRepresentationOfHexLines} />
      <Logo>
        <LogoImg src={logo} alt="hexor" />
      </Logo>
    </HexEditorContainer>
  )
}
