<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input bottom-slots v-model="category" label="Category" counter maxlength="12" :dense="dense">
        <template v-slot:hint>
          Please Enter a Category To Table
        </template>

        <template v-slot:append>
          <q-btn @click="insertCards(category)" round dense flat icon="add"/>
        </template>
      </q-input>
    </div>
  </div>
</template>


<script>
import firebaseDataBase from "../../middleware/firebase/database";
import {mapMutations, mapState, mapActions} from "vuex"

export default {
  name: "AddCategory",
  props: ['chipName'],
  // components: {},z
  // computed: mapState('cardsCategory', ['categories']),

  data() {
    return {
      category: '',
      dense: false,
      // categoryName: this.category
    }
  },
  methods: {
    ...mapActions('cardsCategory', ['insertCards']),
    ...mapMutations('cardsCategory', ['setCards']),

    // addCategory() {
    //   firebaseDataBase.create({entity: this.chipName, item: {categoryName: this.category}})
    //   // firebaseDataBase.create({entity: this.chipName, item: this.categoryName})
    //
    //       .then(() => {
    //           this.categoryName = this.category;
    //       })
    // },
    // read() {
    //   firebaseDataBase.read({entity: this.chipName})
    //       .then(result => {
    //         this.rows = result;
    //       })
    // },
  },

  created() {

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

</style>