import { HexGridLine } from './HexGridLine'
import { ItemSelection } from '../../ItemSelection'
import React, { ReactElement } from 'react'

export interface IHexGridLinesExtraProps {
    hex: ItemSelection<string>[][]
    notifyChange: (index: number) => void
}

export const HexGridLines = ({ hex, notifyChange }: IHexGridLinesExtraProps) : ReactElement => (
    <>
        {hex.map(
            (line: ItemSelection<string>[], index: number): JSX.Element => (
                <HexGridLine key={index} index={index} line={line} notifyChange={notifyChange}></HexGridLine>
            )
        )}
    </>
)
