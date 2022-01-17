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
import {mapMutations, mapState, mapActions} from "vuex"

export default {
  name: "AddCategory",
  props: ['chipName'],


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
  },

  created() {
  }

}
</script>

<style scoped>

</style>