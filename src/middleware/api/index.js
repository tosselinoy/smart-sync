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

    },

    remove: options => {

    },

    update: options => {
    }
}
