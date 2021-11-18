import firebaseDatabase from "../../middleware/firebase/database"

export default {
    getItems: async ({state, commit}) => {



        const category = await firebaseDatabase.read({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity
        });
        commit('setItems', category)
    },

    deleteItem: async ({state, commit}, id) => {
        await firebaseDatabase.remove({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            id: id
        });
        const itemId = state.editedItemId;
        commit('resetEditedItemId')
        commit('deleteItem', itemId)
    },

    insertItem: async ({state, commit}) => {
        const category = {}
        Object.assign(expness, state.editedItem)
        // Saves in DB
        category.id = (await firebaseDatabase.create({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            item: category
        })).key;

        // Saves in store
        commit('resetEditedItem')
        commit('insertItem', category)
    },

    updateItem: async ({state, commit}) => {
        const item = {}
        Object.assign(item, state.itemUpdate)
        debugger
        // Saves in DB
        await firebaseDatabase.update({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            id: state.editedItemId,
            item
        })
        item.id = state.editedItemId;
        debugger
        // Saves in store
        commit('resetItemUpdate')
        commit('resetEditedItemId')

        commit('cardsCategory/editExpeess', {categoryId: state.categoryId,item}, {root:true})
    },

    setItemById: async ({state, commit}) => {
        let expness = {};
        if (state.expness.length && state.expness.find(expness => expness.id === state.editedItemId)) {
            expness = state.expness.find(expness => expness.id === state.editedItemId);
        } else {
            expness = await firebaseDatabase.getById({entity: 'expness', id: state.editedItemId})
        }
        commit('setEditedItem', expness)
    }

}