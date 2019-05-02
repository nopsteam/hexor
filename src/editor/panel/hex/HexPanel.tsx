import React from 'react'
import { HexCell } from './HexCell'
import styled from 'styled-components'

const HexContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 0 0 10px;
`

const HexDivAligned = styled.div`
  text-align: left;
`

export const HexPanel = (props: { lines: string[][] }): React.ReactElement => (
  <HexContainer>
    {props.lines.map(
      (x: string[], firstLevel: number): JSX.Element => (
        <HexDivAligned key={firstLevel}>
          {x.map(
            (y: string, secondLevel: number): JSX.Element => (
              <HexCell key={`${firstLevel}-${secondLevel}`}>{y}</HexCell>
            )
          )}
        </HexDivAligned>
      )
    )}
  </HexContainer>
)
