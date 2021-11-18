import firebaseInstance from '../';
import database from "firebase/database";

firebaseInstance.firebase.auth().onAuthStateChanged(user => {
    firebaseInstance.firebase.database().ref('users/' + user.uid)
        .on('child_changed', (snapshot) => {
            const data = snapshot.val();
            // alert(JSON.stringify(data));
        });
})

function getRef(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}`)
}

function read(options) {
    if (options.subEntity && options.categoryId) {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.categoryId}/${options.subEntity}`).once('value')
            .then(result => {
                return _dataForRead(result);
            })
    } else {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}`).once('value')
            .then(result => {
                return _dataForRead(result);
            })
    }


}

function create(options) {
    if (options.categoryId) {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.categoryId}/${options.subEntity}`).push(options.item);
    } else {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}`).push(options.item);
    }
}

function remove(options) {

    if (options.subEntity && options.categoryId) {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.categoryId}/${options.subEntity}/${options.id}`).remove();
    } else {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.id}`).remove();
    }
}

function update(options) {
    if (options.subEntity && options.categoryId) {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.categoryId}/${options.subEntity}/${options.id}`).update(options.item);
    } else {
        return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.id}`).update(options.item);

    }
}

function getById(options) {
    return firebaseInstance.firebase.database()
        .ref(`users/${window.user.uid}/${options.entity}/${options.id}`).once('value')
        .then(res => {
            console.log(res)
            let item = res.val()
            item.id = res.key
            // var array = this.read(options.entity);
            // return array.find(function (item) {
            //     if (item.id == options.id) {
            //         res = item.id;
            //     }
            return item;
        })
}

function _dataForRead(res) {
    const arr = [];
    const map = res.val();
    for (const mapKey in map) {
        const item = {...map[mapKey]};
        item.id = mapKey;

        item.tableCategory = []
        for (const key in map[mapKey].tableCategory) {
            const category = map[mapKey].tableCategory[key]
            category.id = key;
            item.tableCategory.push(category)
        }
        arr.push(item);
    }
    return arr;
}

// DataBase For Images
// function createDateImage(options){
//     return firebaseInstance.firebase.database().ref(`images/${window.user.uid}/${options.entity}/${options.imageFile}`).set(options.img);
// }
//
// function readDataImage(options){
//     return firebaseInstance.firebase.database().ref(`images/${window.user.uid}/${options.entity}/${options.imageFile}`).once('value')
//         .then(result =>{
//             return result.val()
//         })
// }
// function removeDataImage(options){
//     return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/${options.entity}/${options.imageFile}/${options.imageUrl}`).remove();
//
// }


export default {
    read,
    create,
    remove,
    update,
    getById,
    getRef

    // DataBase For Images
    // createDateImage,
    // readDataImage,
    // removeDataImage
}