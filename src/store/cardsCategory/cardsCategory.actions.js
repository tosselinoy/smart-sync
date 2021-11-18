import firebaseDatabase from "../../middleware/firebase/database"

export default {
    getCards: async ({state, commit}) => {

        const expness = await firebaseDatabase.read({entity: 'expness'});

        commit('setCards', expness)
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
        commit('resetEditedCard')
        commit('insertCard', expness)
    }
}
