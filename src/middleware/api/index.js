const axios = require('axios');
export default {
    get: (options) => {
        return axios.get(`http://localhost:4000/${options.entity}`)
            .then(response => {
                // handle success
                console.log(response);
                return response.data.result.items;
            })
            .catch(error => {
                // handle error
                console.error(error);
            })
    },

    create: (options) => {
        return axios.post(`http://localhost:4000/${options.entity}`, {
            item: options.item
        })
            .then(response => {
                console.log(response);
                return response.data.result.items;
            })
    },

    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.id}`)
            .then(response => {
                console.log(response);
                return response.data.result.items;
            })
    },

    update: options => {

        return axios.patch(`http://localhost:4000/${options.entity}/${options.id}`, options.item)
            .then(() => {
                // console.log(response);
                return;
            })
    }
}
