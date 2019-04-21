import React from 'react'
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

const hexStringFormat = 16
const bitsPerByte = 8
const bitsCountToNexLine = 16

const generateHexLines = (data:Buffer): string[] =>
    Array(Math.ceil(data || Buffer.from(' ') ? data.byteLength / bitsPerByte : 0))
        .fill(0)
        .map((x, y) => (x + (y * bitsCountToNexLine))
            .toString(hexStringFormat)
            .toUpperCase()
            .padStart(bitsPerByte, '0'))

export const HexEditor = (): React.ReactElement => {
    const lines = generateHexLines(hexThing)
    return (
        <HexEditorContainer>
            <OffsetPanel lines={lines}></OffsetPanel>
            <HexPanel></HexPanel>
            <TextPanel></TextPanel>
        </HexEditorContainer>
    )
}
