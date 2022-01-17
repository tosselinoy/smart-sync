export default {
    setItems: ((state, category) => state.category = category),

    setTotalCategory: ((state, total) => Object.assign(state.totalCategory, total)),

    setEditedItemId: ((state, id) => state.editedItemId = id),

    setEditedItem: ((state, category) => state.editCategory = category),


    //Item for Update
    setItemUpdate: ((state, item) => state.itemUpdate = item),
    resetItemUpdate: ((state) => state.itemUpdate = {}),


    //PATH OF DB

    setCategoryId: ((state, categoryId) => state.categoryId = categoryId),

    resetTableId: ((state) => state.categoryId = ''),

    setSubEntity: ((state, subEntity) => state.subEntity = subEntity),

    resetSubEntity: ((state) => state.subEntity = ''),


    resetEditedCategoryId: ((state) => state.editedItemId = ''),

    resetEditedCategory: ((state) => {
        for (const key in state.editCategory) {
            state.editCategory[key] = ''
        }
        delete state.editCategory.id;
    }),

    editCategory: ((rootState, expness) => {
        const index = rootState.category.tableCategory.findIndex(p => p.id === state.categoryId)
        rootState.category.tableCategory.splice(index, 1, expness)
    }),

    deleteCategory: ((state, categoryID) => {

        const index = state.category.tableCategory.findIndex(p => p.id === categoryID)
        state.category.tableCategory.splice(index, 1);
    }),

    insertCategory: ((state, category) => {
        state.category.tableCategory.push(category)
    }),

}