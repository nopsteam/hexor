import React from 'react'
import { TextCell } from './TextCell'
import styled from 'styled-components'

const TextContainer = styled.div`
  color: #222;
  display: inline-block;
  vertical-align: top;
`

const TextDivAligned = styled.div`
  text-align: left;
`

export const TextPanel = (props: { lines: string[][] }): React.ReactElement => (
  <TextContainer>
    {props.lines.map(
      (x: string[], firstLevel: number): JSX.Element => (
        <TextDivAligned key={firstLevel}>
          {x.map(
            (y: string, secondLevel: number): JSX.Element => (
              <TextCell key={`${firstLevel}-${secondLevel}`}>{y}</TextCell>
            )
          )}
        </TextDivAligned>
      )
    )}
  </TextContainer>
)
