import { ItemSelection } from "../../ItemSelection"
import { HexCell } from "./HexCell"
import React, { ReactElement, useState } from 'react'

export interface IHexGridCellsExtraProps {
    cells: ItemSelection<string>[]
    lineIndex: number
    notifyChange: (index: number) => void
}

const mouseUpEventHandler = 
  (x: number, eventNotifier: ((index: number) => void),  setHex: React.Dispatch<React.SetStateAction<ItemSelection<string>[]>>) => 
  (_: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  setHex(hex => {
    const newHex = [ ...hex ]
    newHex[x] = ItemSelection.with<string>(hex[x].pieceOfData, true)
    return newHex 
  })

  eventNotifier(x)
}

export const HexGridCells = ({ cells, lineIndex, notifyChange } : IHexGridCellsExtraProps) : ReactElement => { 
    const [stateCells, setCells] = useState(cells)

    return (
        <>
            {stateCells.map(
                (column: ItemSelection<string>, secondLevel: number): JSX.Element => (
                <HexCell
                    key={`${lineIndex}-${secondLevel}`}
                    selected={column.selected}
                    onMouseUp={mouseUpEventHandler(secondLevel, notifyChange, setCells)}
                >
                    {column.pieceOfData}
                </HexCell>
                )
            )}
        </>
    )
}