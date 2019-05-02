import React from 'react'
import styled from 'styled-components'

const OffsetContainer = styled.div`
  padding: 0 10px;
  background: #444444;
  color: #aaa;
  text-align: right;
  display: inline-block;
  vertical-align: top;
`

const OffsetAlignedDiv = styled.div`
  font-family: consolas, liberation mono;
  font-size: calc(10px + 2vmin);
`

export const OffsetPanel = (props: { lines: string[] }): React.ReactElement => (
  <OffsetContainer>
    {props.lines.map(
      (x): JSX.Element => (
        <div key={`div-${x}`}>
          <OffsetAlignedDiv key={x}>{x}</OffsetAlignedDiv>
        </div>
      )
    )}
  </OffsetContainer>
)
