import React from 'react'
import { TextCell } from './TextCell'
import styled from 'styled-components'

const TextContainer = styled.div`
    padding: 0 20px 0 5px
    color: #222
    display: inline-block
    vertical-align: top
`

export const TextPanel = (props: { lines: string[][] }): React.ReactElement => (
  <TextContainer>
    {props.lines.map(
      (x: string[], firstLevel: number): JSX.Element => (
        <div key={firstLevel}>
          {x.map(
            (y: string, secondLevel: number): JSX.Element => (
              <TextCell key={`${firstLevel}-${secondLevel}`}>{y}</TextCell>
            )
          )}
        </div>
      )
    )}
  </TextContainer>
)
