const EvenNumber = require('../Scripts/even')

// test if the matcher is true
test('EvenNumber return true for 500', () => {
    expect(EvenNumber(500)).toBe(true)
})

/*
 * test if the matcher is not true
 * expect(EvenNumber(501)).toBe(false) is valid but let's try how .not works.
 */
test('EvenNumber return false for 501', () => {
    expect(EvenNumber(501)).not.toBe(true)
})