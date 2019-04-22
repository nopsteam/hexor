import React, { CSSProperties } from 'react'
import { HexCell } from './HexCell'
import styled from 'styled-components'

const HexContainer = styled.div`
    display: inline-block
    vertical-align: top
    padding: 0 10px
`

export const HexPanel = (): React.ReactElement => (
  <HexContainer>
    <div>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
    </div>
    <div>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
      <HexCell>00</HexCell>
    </div>
  </HexContainer>
)
