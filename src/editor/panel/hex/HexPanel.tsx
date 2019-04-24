import React from 'react'
import { HexCell } from './HexCell'
import styled from 'styled-components'

const HexContainer = styled.div`
    display: inline-block
    vertical-align: top
    padding: 0 10px
`

export const HexPanel = (props: { lines: string[][] }): React.ReactElement => (
  <HexContainer>
    {props.lines.map(
      (x: string[], firstLevel: number): JSX.Element => (
        <div key={firstLevel}>
          {x.map(
            (y: string, secondLevel: number): JSX.Element => (
              <HexCell key={`${firstLevel}-${secondLevel}`}>{y}</HexCell>
            )
          )}
        </div>
      )
    )}
  </HexContainer>
)
