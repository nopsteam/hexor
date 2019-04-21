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

const formatOfStringsInHex = 16
const offsetSize = 8
const bitsCountToNexLine = 16
const arrayInitializer = 0
const leftBytesPadding = '0'

const getOffsetSizeFromBuffer = (data: Buffer) => 
    Math.ceil(data.byteLength / offsetSize)

const generateHexLines = (data:Buffer) => 
    Array(getOffsetSizeFromBuffer(data))
        .fill(arrayInitializer)
        .map((x: number, y: number) => (x + (y * bitsCountToNexLine))
            .toString(formatOfStringsInHex)
            .toUpperCase()
            .padStart(offsetSize, leftBytesPadding))

export const HexEditor = () => {
    const lines = generateHexLines(hexThing)   
    return (
        <HexEditorContainer>
            <OffsetPanel lines={lines}></OffsetPanel>
            <HexPanel></HexPanel>
            <TextPanel></TextPanel>
        </HexEditorContainer>
    )
}