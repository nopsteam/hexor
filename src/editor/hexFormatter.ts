import { splitEvery } from 'ramda'

const arrayInitializer = 0
const formatOfStringsInHex = 16
const offsetLength = 8
const charForLeftPadding = '0'
const representationOf64bitsInBytes = 32
const splitInChunksOfTwo = /.{2}/g
const bitsCountToNexLine = 16

export const getOffsetSizeFromBuffer = (data: Buffer, bits: number): number =>
  Math.ceil(data.byteLength / bits)

export const generateOffsetLine = (
  number: number,
  offsetLength: number,
  charForLeftPadding: string,
  radix?: number
): string =>
  number
    .toString(radix)
    .toUpperCase()
    .padStart(offsetLength, charForLeftPadding)

export const generateOffsetLines = (data: Buffer): string[] =>
  Array(getOffsetSizeFromBuffer(data, bitsCountToNexLine))
    .fill(arrayInitializer)
    .map(
      (value: number, index: number): string =>
        generateOffsetLine(
          value + index * bitsCountToNexLine,
          offsetLength,
          charForLeftPadding,
          formatOfStringsInHex
        )
    )

export const generateHexLines = (data: Buffer): string[][] =>
  splitEvery(
    representationOf64bitsInBytes,
    data.toString('hex').toUpperCase()
  ).map(
    (hexLine: string): RegExpMatchArray | null =>
      hexLine.match(splitInChunksOfTwo)
  ) as string[][]

export const generateAsciiRepresentationOfHexLines = (
  data: Buffer
): string[][] =>
  generateHexLines(data).map(
    (line: string[]): string[] =>
      line.map(
        (column: string): string =>
          String.fromCharCode(parseInt(column, formatOfStringsInHex))
      )
  )

export default {
  generateOffsetLines,
  generateHexLines,
  generateAsciiRepresentationOfHexLines,
}
