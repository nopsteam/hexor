import { generateOffsetLines, generateHexLines } from './hexFormatter'

describe('For generateOffsetLines', (): void => {
  it('should generate a single line when the buffer length <= 8', (): void => {
    const testCase = Array(8)
      .fill('0')
      .join()
    const data = Buffer.from(testCase)
    const lines = generateOffsetLines(data)
    expect(lines).toEqual(['00000000'])
  })

  it('should generate two lines when the buffer length > 8 but <= 16', (): void => {
    const testCase = Array(16)
      .fill('0')
      .join()
    const data = Buffer.from(testCase)
    const lines = generateOffsetLines(data)
    expect(lines).toEqual(['00000000', '00000010'])
  })
})

describe('For generateHexLines ', (): void => {
  it('generateHexLines should slice a string', (): void => {
    const chunks: string[][] = generateHexLines(Buffer.from('1234123412341234'))

    expect(chunks).toEqual([
      [
        '31',
        '32',
        '33',
        '34',
        '31',
        '32',
        '33',
        '34',
        '31',
        '32',
        '33',
        '34',
        '31',
        '32',
        '33',
        '34',
      ],
    ])
  })
})
