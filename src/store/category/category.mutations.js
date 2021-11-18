export default {
    setItems: ((state, category) => state.category = category),

    setEditedItemId: ((state, id) => state.editedItemId = id),

    setItemUpdate: ((state, item) => state.itemUpdate = item),

    setEditedItem: ((state, category) => state.editedItem = category),


    setCategoryId: ((state, categoryId) => state.categoryId = categoryId),

    resetItemUpdate: ((state) => state.itemUpdate = {}),

    resetTableId: ((state) => state.categoryId = ''),

    setSubEntity: ((state, subEntity) => state.subEntity = subEntity),


    resetSubEntity: ((state) => state.subEntity = ''),

    resetEditedItemId: ((state) => state.editedItemId = ''),

    resetEditedItem: ((state) => {
        for (const key in state.editedItem) {
            state.editedItem[key] = ''
        }
        delete state.editedItem.id;
    }),

    editItem: ((rootState, expness) => {
        const index = rootState.category.findIndex(p => p.id ===state.categoryId)
        debugger

        rootState.category.splice(index, 1, expness)
    }),

    deleteItem: ((state, categoryID) => {
        const index = state.category.findIndex(p => p.id === categoryID)
        state.category.splice(index, 1);
    }),

    insertItem: ((state, category) => {
        state.category.push(category)
    })
}