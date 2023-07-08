const EvenNumber = value => {
    if (typeof value !== 'number')
        throw new Error('Paramether is not a number')

    return !(value % 2)
}

module.exports = EvenNumber