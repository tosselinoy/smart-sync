export default {
    //insert item into DataBase
    insert: function (table, item) {
        //add id to new item (for delete function)
        item.id = new Date().getTime();
        //insert to table
        var arr = this.select(table);
        arr.push(item);
        localStorage.setItem(table, JSON.stringify(arr));
    },
    //select items from DataBase
    select: function (table) {
        var result = localStorage.getItem(table);
        if (result == null) {
            result = '[]';
        }
        return JSON.parse(result);
    },
    remove: function (table, id) {
        //select the relevant item from arr
        var arr = this.select(table);
        var foundindex = this._searchIndexById(table, id);
        if (foundindex == undefined) {
            return;
        }
        //Remove the item from arr
        arr.splice(foundindex, 1);
        //Update the arr to localStorage
        localStorage.setItem(table, JSON.stringify(arr));
    },
    update: function (table, id, item) {
        //select the relevant item from arr
        var arr = this.select(table);
        var foundindex = this._searchIndexById(table, id);
        //update from item in arr
        if (foundindex == undefined) {
            return;
        }

        for (var key in item) {
            if (item[key]) {
                arr[foundindex][key] = item[key]
            }
        }
        //Update the arr to localStorage
        localStorage.setItem(table, JSON.stringify(arr));
    },
    _searchIndexById: function (table, id) {
        var arr = this.select(table);
        var foundindex = undefined;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == id) {
                foundindex = i;
                break;
            }
        }
        return foundindex;
    },
    getItemById(table, id) {
        var arr = this.select(table);
        return arr.find(function (item) {
            return item.id == id;
        })
    }
}








