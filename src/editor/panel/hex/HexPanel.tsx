import React, { useRef, useState, useMemo } from 'react'
import styled from 'styled-components'
import { ItemSelection } from '../../ItemSelection'
import { HexGridLines } from './HexGridLines'

const HexContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 0 0 10px;
`

export interface IHexPanelExtraProps {
  lines: ItemSelection<string>[][] 
  notifyChange: (index: number) => void
}

export const HexPanel = ({ lines, notifyChange }: IHexPanelExtraProps): React.ReactElement => {
  let indexer = 0

  const [hex, setHex] = useState<ItemSelection<string>[][]>(lines)

  return (
    <HexContainer>
      <HexGridLines hex={hex} notifyChange={notifyChange}></HexGridLines>
    </HexContainer>
  )
}
