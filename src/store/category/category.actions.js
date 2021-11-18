import firebaseDatabase from "../../middleware/firebase/database"

export default {
    getCategory: async ({state, commit}) => {
        const category = await firebaseDatabase.read({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity
        });
        commit('setItems', category)
    },

    deleteCategory: async ({state, commit}, id) => {
        await firebaseDatabase.remove({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            id: id
        });
        commit('resetEditedCategoryId')
        commit('deleteCategory', id)
    },

    insertCategory: async ({state, commit}) => {
        const category = {}
        Object.assign(category, state.editCategory)
        // Saves in DB
        category.id = (await firebaseDatabase.create({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            item: category
        })).key;

        // Saves in store
        commit('resetEditedCategory')
        commit('insertCategory', category)
    },

    updateItem: async ({state, commit}) => {
        debugger
        const item = {}
        Object.assign(item, state.itemUpdate)

        // Saves in DB
        await firebaseDatabase.update({
            entity: 'expness',
            categoryId: state.categoryId,
            subEntity: state.subEntity,
            id: state.editedItemId,
            item
        })
        item.id = state.editedItemId;

        // Saves in store
        commit('resetItemUpdate')
        commit('resetEditedCategoryId') //Change TO resetEditedCategoeyId

        commit('cardsCategory/editExpeess', {categoryId: state.categoryId, item}, {root: true})
    },

    setItemById: async ({state, commit}) => {
        let expness = {};
        if (state.expness.length && state.expness.find(expness => expness.id === state.editedItemId)) {
            expness = state.expness.find(expness => expness.id === state.editedItemId);
        } else {
            expness = await firebaseDatabase.getById({entity: 'expness', id: state.editedItemId})
        }
        commit('setEditedItem', expness)
    },

    checkForData: async ({state, commit, dispatch, rootState, payload}) => {

        await dispatch('cardsCategory/getCards', payload, {root: true});
        console.log(rootState.cardsCategory.expness)
        const category = rootState.cardsCategory.expness.find(p => p.id === state.categoryId)
        commit('setItems', category)
        //     for (const key in rootState["cardsCategory/expness"]) {
        //         debugger
        //         console.log(key,'key')
        //         // dispatch('getCategory',categoryData[state.categoryId][key]);
        //     }
    }

}