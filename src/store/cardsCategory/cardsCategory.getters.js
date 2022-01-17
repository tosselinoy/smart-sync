export default {
    total: state => {

        if (state.expness.length === 0) {
            // debugger
            return []
        } else {

            let sum = 0;
            let totalArrayByCategory = [];
            let obj = state.expness
            for (let key in obj) {
                let array = obj[key].tableCategory;
                for (let element of array) {
                    let num = parseInt(element.price)
                    sum += num;
                }
                let nameOfCategory = obj[key].categoryName;
                totalArrayByCategory.push({name: nameOfCategory, total: sum})
                sum = 0;
            }
            // debugger
            return totalArrayByCategory;
        }
    },

    totalOfAllTotals: state => {
        let sum = 0;
        let obj = state.expness
        for (let key in obj) {
            let array = obj[key].tableCategory;
            for (let element of array) {
                let num = parseInt(element.price)
                sum += num;
            }
        }
        return sum
    }
}