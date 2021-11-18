export default {
    setCards: ((state, expness) => state.expness = expness),

    resetEditedCardId: ((state) => state.expness.id = ''),

    // setCategoryId: ((state, categoryId) => state.categoryId = categoryId),

    deleteCard: ((state, cardsId) => {
        const index = state.expness.findIndex(p => p.id === cardsId)
        state.expness.splice(index, 1);
    }),

    resetEditedCard: ((state) => {
        for (const key in state.cardsId) {
            state.expness[key] = ''
        }
        delete state.expness.id;
    }),

    insertCard: ((state, expness) => {
        state.expness.push(expness)
    }),

    editExpeess: ((state, item) => {
        debugger
        const index = state.expness.findIndex(p => p.id === item.categoryId)
        let category = state.expness[index].tableCategory
        const index2 = category.findIndex(p => p.id === item.item.id)
        Object.assign(category[index2], item.item)
        // category.splice(index2, 1, item.item)
    })


}