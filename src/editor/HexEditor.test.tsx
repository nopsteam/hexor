import * as he from './HexEditor'

it('generateHexLines should slice a string', (): void => {
  const chunks: string[][] = he.generateHexLines(
    Buffer.from('1234123412341234')
  )

  expect(chunks).toEqual([
    ['31', '32', '33', '34', '31', '32', '33', '34'],
    ['31', '32', '33', '34', '31', '32', '33', '34']
  ])
})
