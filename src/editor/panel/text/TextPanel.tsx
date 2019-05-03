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
      (line: string[], firstLevel: number): JSX.Element => (
        <TextDivAligned key={firstLevel}>
          {line.map(
            (column: string, secondLevel: number): JSX.Element => (
              <TextCell key={`${firstLevel}-${secondLevel}`}>{column}</TextCell>
            )
          )}
        </TextDivAligned>
      )
    )}
  </TextContainer>
)
