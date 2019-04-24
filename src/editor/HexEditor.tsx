import React from 'react'
import { splitEvery } from 'ramda'
import { OffsetPanel, HexPanel, TextPanel } from './panel'
import styled from 'styled-components'
import hexThing from './neo.arch.dialog'

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

const formatOfStringsInHex = 16
const offsetSize = 8
const bitsCountToNexLine = 16
const arrayInitializer = 0
const leftBytesPadding = '0'
const splitInChunksOfTwo = /.{2}/g

const getOffsetSizeFromBuffer = (data: Buffer): number =>
  Math.ceil(data.byteLength / offsetSize)

const generateOffsetLines = (data: Buffer): string[] =>
  Array(getOffsetSizeFromBuffer(data))
    .fill(arrayInitializer)
    .map(
      (x: number, y: number): string =>
        (x + y * bitsCountToNexLine)
          .toString(formatOfStringsInHex)
          .toUpperCase()
          .padStart(offsetSize, leftBytesPadding)
    )

export const generateHexLines = (data: Buffer): string[][] =>
  splitEvery(formatOfStringsInHex, data.toString('hex').toUpperCase()).map(
    (x: string): RegExpMatchArray | null => x.match(splitInChunksOfTwo)
  ) as string[][]

export const HexEditor = (): React.ReactElement => {
  const offsetLines = generateOffsetLines(hexThing)
  const hexLines = generateHexLines(hexThing)

  const asciiRepresentationOfHexLines = hexLines.map(
    (x: string[]): string[] =>
      x.map(
        (y: string): string =>
          String.fromCharCode(parseInt(y, formatOfStringsInHex))
      )
  )

  return (
    <HexEditorContainer>
      <OffsetPanel lines={offsetLines} />
      <HexPanel lines={hexLines} />
      <TextPanel lines={asciiRepresentationOfHexLines} />
    </HexEditorContainer>
  )
}
