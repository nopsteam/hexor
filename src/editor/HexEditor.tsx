import React from 'react'
import { OffsetPanel, HexPanel, TextPanel } from './panel'
import styled from 'styled-components'
import hexThing from './neo.arch.dialog'
import logo from '../pirate_flag.png'

const HexEditorContainer = styled.div`
    position: absolute
    white-space: nowrap
    left: 0
    right: 0
    top: 0
    bottom: 0
    overflow: hidden
    outline: none
    background: #252526
`

const Logo = styled.div`
    position: absolute
    right: 20px
    bottom: 20px
    width: 100px
    height: 100px
`

const LogoImg = styled.img`
    width: 100%
    max-width: 145px
    height: auto
`

const formatOfStringsInHex = 16
const offsetSize = 8
const bitsCountToNexLine = 16
const arrayInitializer = 0
const leftBytesPadding = '0'

const getOffsetSizeFromBuffer = (data: Buffer): number =>
  Math.ceil(data.byteLength / offsetSize)

const generateHexLines = (data: Buffer): string[] =>
  Array(getOffsetSizeFromBuffer(data))
    .fill(arrayInitializer)
    .map(
      (x: number, y: number): string =>
        (x + y * bitsCountToNexLine)
          .toString(formatOfStringsInHex)
          .toUpperCase()
          .padStart(offsetSize, leftBytesPadding)
    )

export const HexEditor = (): React.ReactElement => {
  const lines = generateHexLines(hexThing)
  return (
    <HexEditorContainer>
      <OffsetPanel lines={lines} />
      <HexPanel />
      <TextPanel />
      <Logo>
        <LogoImg src={logo} alt="hexor"/>
      </Logo>
    </HexEditorContainer>
  )
}
