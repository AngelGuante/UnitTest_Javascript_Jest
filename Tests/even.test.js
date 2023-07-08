const EvenNumber = require('../Scripts/even')

test('EvenNumber return true for 500', () => {
    expect(EvenNumber(500)).toBe(true)
})