<template>
  <div class="q-pa-md">
    <div class="q-gutter-xs">
      <!--      <q-chip-->
      <!--          :data="categories"-->
      <!--          :chips="chips"-->
      <!--          chips-key="name"></q-chip>-->
      <q-chip class="chip-design" removable v-for="category in expness" @remove="deleteCards(category.id)">
        {{ category.categoryName }}
      </q-chip>

      <!--      <q-btn color="primary" label="Reset" @click="reset" class="q-mt-sm"/>-->
    </div>
  </div>

</template>

<script>
import firebaseDataBase from "../../middleware/firebase/database";
import {mapMutations, mapState, mapActions} from "vuex"

export default {

  name: "Categories",
  props: ['chipName', 'isReload'],
  components: {},
  computed: mapState('cardsCategory', ['expness']),
  data() {
    return {
      model: '',
      // categories: []
    }
  },
  methods: {
    ...mapActions('cardsCategory', ['deleteCards', 'getCards']),
    // ...mapMutations('cardsCategory',[]),


    // read() {
    //   firebaseDataBase.read({entity: this.chipName})
    //       .then(result => {
    //         this.categories = result;
    //       })
    // },
    // remove(id) {
    //   firebaseDataBase.remove({entity: this.chipName, id})
    //       .then(() => {
    //         // this.read();
    //       })
    // }
  },
  // watch: {
  //   isReload() {
  //     this.read();
  //   }
  // },
  created() {
    this.getCards();
    // this.read();
    // firebaseDataBase.getRef()
    //     .on('child_changed', (snapshot) => {
    //       this.read();
    //       // const data = snapshot.val();
    //       // alert(JSON.stringify(data));
    //     });
  }

}
</script>

<style scoped>
.chip-design {
  color: black;
  background-color: #4ba3c7;
}
</style>