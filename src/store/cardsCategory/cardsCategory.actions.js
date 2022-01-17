import firebaseDatabase from "../../middleware/firebase/database"

export default {
    getCards: async ({state, commit}) => {
        const expness = await firebaseDatabase.read({entity: 'expness'});
        commit('setCards', expness)
    },

    getIncome: async ({state, commit}) => {
        const incomes = await firebaseDatabase.read({entity: 'income'});
        commit('setIncome', incomes)
    },

    deleteCards: async ({state, commit}, id) => {
        await firebaseDatabase.remove({
            entity: 'expness',
            id: id
        });
        // const cardsId = state.cardsId;
        commit('resetEditedCardId')
        commit('deleteCard', id)
    },

    insertCards: async ({state, commit}, category) => {
        const expness = {}
        // Object.assign(category, state.categories)
        // Saves in DB
        expness.id = (await firebaseDatabase.create({
            entity: 'expness',
            item: {categoryName: category},
        })).key;
        expness.categoryName = category
        // Saves in store
        // commit('resetEditedCard')
        commit('insertCard', expness)
    },

    insertIncome: async ({state, commit}, salary) => {
        let salaryTest = {};
        // Save in DB
        salaryTest = (await firebaseDatabase.create({
            entity: 'income',
            item: {salary: salary},
        }))
        salaryTest.salary = salary
        commit('resetEditedCard')
        commit('insertSalary', expness)
    },

    totalCardsCategories: async ({state, commit, getters}) => {
        // debugger
        let arrTotal = getters.total
        await commit('setArrayTotal', arrTotal)
        // debugger
    },
    // checkForDataCards: async ({state, commit, dispatch, payload}) => {
    //     await dispatch('cardsCategory/getCards', payload, {root: true});
    //     const expeness = state.expness
    //     commit('setCards', expeness)
    // },

}
