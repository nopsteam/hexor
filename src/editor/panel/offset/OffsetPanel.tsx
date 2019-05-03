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
  font-size: calc(10px + 1vmin);
`

export const OffsetPanel = (props: { lines: string[] }): React.ReactElement => (
  <OffsetContainer>
    {props.lines.map(
      (line): JSX.Element => (
        <div key={`div-${line}`}>
          <OffsetAlignedDiv key={line}>{line}</OffsetAlignedDiv>
        </div>
      )
    )}
  </OffsetContainer>
)
