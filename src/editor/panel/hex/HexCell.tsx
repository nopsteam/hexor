import styled from 'styled-components'

interface IHexCellExtraProps {
  selected: boolean
}

export const HexCell = styled.span<IHexCellExtraProps>`
  display: inline;
  white-space: pre;
  color: #fff;
  padding: 0 2px;
  background-color: ${props => props.selected ? 'red' : 'transparent'}
`
