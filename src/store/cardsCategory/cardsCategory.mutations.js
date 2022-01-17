export default {

    setCards: ((state, expness) => state.expness = expness),

    setArrayTotal: ((state, total) => state.totalCards = total),


    setIncome: ((state, incomes) => state.income = incomes),


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


    resetEditedIncomes: ((state) => {
        for (const key in state.income.id) {
            state.income[key] = ''
        }
        delete state.income.id;
    }),


    insertCard: ((state, expness) => {
        state.expness.push(expness)
    }),

    insertIncome: ((state, salary) => {
        state.income.push(salary)
    }),

    editExpeess: ((state, item) => {
        const index = state.expness.findIndex(p => p.id === item.categoryId)
        let category = state.expness[index].tableCategory
        const index2 = category.findIndex(p => p.id === item.item.id)
        Object.assign(category[index2], item.item)
        // category.splice(index2, 1, item.item)
    })


}