export default {
    total: state => {
        let total = [];
        let sum = 0

        // console.log(state.category.tableCategory)
        if (Object.keys(state.category).length === 0) {
            return '...'
        } else {
            let arrayOfPrice = state.category.tableCategory;
            for (const element of arrayOfPrice) {
                let num = parseInt(element.price);
                total.push(num);
                sum += num;
            }
            return sum;
        }
    }
}