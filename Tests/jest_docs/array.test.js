const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]

// check if the array contains a particular item
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})