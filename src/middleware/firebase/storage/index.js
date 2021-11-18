import firebaseInstance from "../index"
import storage from "firebase/storage"


function uploadImag(options) {
    return firebaseInstance.firebase.storage().ref().child('images/imageFile/' + options.imgName).put(options.img) // uploading
        .then(res => {
            return res.ref.getDownloadURL() // downloading
                .then(url => {
                    return url
                })
        })
    // let imageRef = firebaseInstance.firebase.storage().ref().child('images/')
    // return imageRef.child('imageFile/' + options.imgName).put(options.img)
    //     .then(res => {
    //         return res.ref.getDownloadURL()
    //             .then(url => {
    //                 return url
    //             })
    //     })
}

function deleteImageStorage(options) {
    return firebaseInstance.firebase.storage().ref()
        .child(`${options.entity}/${options.imageFile}/${options.imgName}`).delete()
        // return firebaseInstance.firebase.storage().ref().child('images/imageFile/' + options.imgName).delete()
        .then(() => {
        })
}

export default {
    uploadImag,
    deleteImageStorage
}