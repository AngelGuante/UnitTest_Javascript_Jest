test('the data is peanut butter', async () => {
    const data = await fetchData(false)
    expect(data).toBe('peanut butter')
})

const fetchData = async (flag) => {
    const path = 'https://pokeapi.co/api/v2/pokemon/'
    const pathConcat = flag ? `${path}ditto` : `${path}NONE`
    const response = await fetch(pathConcat)
    if (response)
        return 'peanut butter'
    return new Error('error')
}