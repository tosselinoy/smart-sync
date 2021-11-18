export default {
    isItemGreaterThenX:state => X =>
        state.category.filter(expness => expness.price < X),
}