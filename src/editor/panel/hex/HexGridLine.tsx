import styled from "styled-components"
import { ItemSelection } from "../../ItemSelection"
import { HexGridCells } from "./HexGridCells"
import React, { ReactElement } from 'react'

const HexDivAligned = styled.div`
  text-align: left;
`

export interface IHexGridLineExtraProps {
    index: number
    line: ItemSelection<string>[]
    notifyChange: (index: number) => void
}

export const HexGridLine = ({ index, line, notifyChange} : IHexGridLineExtraProps) : ReactElement =>  (
    <HexDivAligned key={index}>
        <HexGridCells cells={line} lineIndex={index} notifyChange={notifyChange}></HexGridCells>
    </HexDivAligned>
)