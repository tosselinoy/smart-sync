<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="category in expness" flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">{{ category.categoryName }}</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section @click="deleteCards(category.id)">Remove Card</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator/>

      <q-card-actions>
        <q-btn @click="goToTableCategory(category)" flat>Insert Your Expanse</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import firebaseDataBase from "../../middleware/firebase/database";
import {mapState,mapActions,mapMutations} from "vuex";

export default {
  name: "Cards",
  props: ['chipName'],
  components: {},
  computed:mapState('cardsCategory',['expness']),
  data() {
    return {
      // categories: [],
    }
  },
  methods: {
    ...mapActions('cardsCategory',['getCards','deleteCards']),
    ...mapMutations('category',['setItems']),
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
    // },
    goToTableCategory(category) {
      this.setItems(category);
      this.$router.push(`/category/${category.id}`)

    }
  },
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
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>