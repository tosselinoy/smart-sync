<template>

  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />
        <q-toolbar-title>
          SmartSync
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        bordered
        content-class="bg-grey-2"
    >

      <q-list>

<!--        <q-item v-if="user" clickable>-->
<!--          <q-avatar>-->
<!--            <img :src="imageUrl">-->
<!--          </q-avatar>-->
<!--        </q-item>-->

        <q-item v-if="!user" clickable @click="$router.push(`/login`)">
          <q-item-section avatar>
            <q-icon name="code"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Sets of your favorite artist</q-item-label>
          </q-item-section>
        </q-item>


        <!--        <q-item-label header>Menu</q-item-label>-->
        <q-item clickable @click="$router.push(`/`)">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <!--            <q-item-label caption>Home Page</q-item-label>-->
          </q-item-section>
        </q-item>

        <q-item v-if="user" clickable @click="$router.push(`/system`)">
          <!--          <q-item-section avatar>-->
          <!--            <q-icon name="chat"/>-->
          <!--          </q-item-section>-->
          <q-item-section>
            <q-item-label>The System</q-item-label>
            <q-item-label caption>Start organizing your life</q-item-label>
          </q-item-section>
        </q-item>


        <q-item v-if="user" clickable @click="$router.push(`/personalSettings`)">
          <!--          <q-item-section avatar>-->
          <!--            <q-icon name="forum"/>-->
          <!--          </q-item-section>-->
          <q-item-section>
            <q-item-label>Personal Settings</q-item-label>
            <q-item-label caption>Before you get started, let's define a few things</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="user" clickable @click="$router.push(`/cardsOfTables`)">
          <!--          <q-item-section avatar>-->
          <!--            <q-icon name="forum"/>-->
          <!--          </q-item-section>-->
          <q-item-section>
            <q-item-label>YourCards</q-item-label>
            <q-item-label caption>Your Category</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="user">
          <!--          v-if="this.window.user"-->
          <q-item-section>
            <q-btn @click="moveToLoOut()" caption> log Out</q-btn>
          </q-item-section>
        </q-item>


<!--        <q-item-section>-->
<!--          <q-input type="file" @input="catchImage"></q-input>-->
<!--          <q-btn @click="uploadImage"> Upload</q-btn>-->
<!--          <q-btn @click="deleteImage(imageUrl)"> Remove </q-btn>-->
<!--        </q-item-section>-->

      </q-list>
    </q-drawer>


    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>


<script>
import Home from "./views/Home";
import firebaseInstance from "./middleware/firebase";
import storage from "./middleware/firebase/storage"
import firebaseDatabase from "./middleware/firebase/database"

export default {
  name: 'LayoutDefault',

  components: {
    Home
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      user: '',
      // img: null,
      // imageUrl: "",
      // entity: 'images',
      // imageFile: 'imageFile',
    }
  },
  methods: {
    //
    // // Uploade Images To Storeage
    // //
    // catchImage(file) {
    //   this.img = file[0]
    // },
    // uploadImage() {
    //   storage.uploadImag({img: this.img, imgName: this.img.name})
    //       .then(res => {
    //         this.imageUrl = res;
    //         console.log(this.img)
    //         console.log(this.imageUrl)
    //         firebaseDatabase.createDateImage({entity: this.entity, img: this.imageUrl, imageFile: this.imageFile})
    //
    //       })
    // },
    // deleteImage(imageUrl) {
    //   debugger
    //   console.log(this.img)
    //   firebaseDatabase.remove({entity: this.entity, imageFile: this.imageFile, imageUrl})
    //       .then(() => {
    //         debugger
    //         storage.deleteImageStorage({entity: this.entity, imageFile: this.imageFile, imgName: this.img.name})
    //             .then(() => {
    //               debugger
    //               this.readDataImage();
    //             })
    //
    //       })
    // },
    // readDataImage() {
    //   firebaseDatabase.readDataImage({entity: this.entity, imageFile: this.imageFile})
    //       .then(result => {
    //         this.imageUrl = result
    //       })
    // },

    moveToLoOut() {
      firebaseInstance.firebase.auth().signOut().then(() => {
        window.location.reload(false);
      }).catch((error) => {
        console.error(error)
      });
    }
  },
  created() {
    this.user = window.user
    // this.readDataImage();
  }
}
</script>

<style>
</style>
