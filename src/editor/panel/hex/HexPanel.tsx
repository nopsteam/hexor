import React, { useRef, useState, useMemo } from 'react'
import { HexCell } from './HexCell'
import styled from 'styled-components'
import { isNull } from 'util'

const HexContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 0 0 10px;
`

const HexDivAligned = styled.div`
  text-align: left;
`

interface Test {
  first: Partial<HTMLSpanElement & EventTarget> | null
  second: Partial<HTMLSpanElement & EventTarget> | null
}

const mouseUpHandler = (
  setRangeSelection: React.Dispatch<React.SetStateAction<Test>>
): React.MouseEventHandler => (
  event: React.MouseEvent<HTMLSpanElement, MouseEvent>
): void => {
  const target = event.currentTarget

  setRangeSelection(
    (rangeSelection: Test): Test => {
      if (isNull(rangeSelection.first)) {
        target.setAttribute('style', 'background-color: red')
        return { first: target, second: null }
      } else {
        return { first: rangeSelection.first, second: target }
      }
    }
  )
}

const paintSelection = (
  begin: number,
  end: number,
  refs: React.RefObject<HTMLSpanElement>[]
): void => {
  for (let index = begin + 1; index <= end; index++) {
    const ref = refs[index]

    if (ref !== null) {
      const span = ref.current as HTMLSpanElement
      span.setAttribute('style', 'background-color: red')
    }
  }
}

const paintIfNeeded = (
  { first, second }: Test,
  refs: React.RefObject<HTMLSpanElement>[]
): void => {
  if (first !== null && second !== null) {
    const begin =
      first !== null && first.id !== null ? parseInt(first.id as string) : 0

    const end =
      second !== null && second.id !== null ? parseInt(second.id as string) : 0

    paintSelection(begin, end, refs)
  }
}

export const HexPanel = (props: { lines: string[][] }): React.ReactElement => {
  let indexer = 0

  const totalSize = props.lines
    .map((x: string[]): number => x.length)
    .reduce((x: number, y: number): number => x + y)

  const refs = Array(totalSize)
    .fill(null)
    .map((): React.MutableRefObject<null> => useRef(null))

  const [cells] = useState<React.RefObject<HTMLSpanElement>[]>(refs)
  const [rangeSelected, setRangeSelected] = useState<Test>({
    first: null,
    second: null,
  })

  paintIfNeeded(rangeSelected, cells)

  const component = (
    <HexContainer>
      {props.lines.map(
        (line: string[], firstLevel: number): JSX.Element => (
          <HexDivAligned key={firstLevel}>
            {line.map(
              (column: string, secondLevel: number): JSX.Element => (
                <HexCell
                  ref={cells[indexer]}
                  id={`${indexer++}`}
                  key={`${firstLevel}-${secondLevel}`}
                  onMouseUp={mouseUpHandler(setRangeSelected)}
                >
                  {column}
                </HexCell>
              )
            )}
          </HexDivAligned>
        )
      )}
    </HexContainer>
  )

  return useMemo((): JSX.Element => component, [
    props.lines,
    indexer,
    setRangeSelected,
  ])
}
