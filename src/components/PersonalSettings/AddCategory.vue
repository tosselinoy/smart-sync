<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input bottom-slots v-model="category" label="Category" counter maxlength="12" :dense="dense">
        <template v-slot:hint>
          Please Enter a Category To Table
        </template>

        <template v-slot:append>
          <q-btn @click="addCategory()" round dense flat icon="add"/>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import firebaseDataBase from "../middleware/firebase/database";

export default {
  name: "AddCategory",
  props: ['chipName'],
  components: {},
  data() {
    return {
      category: '',
      dense: false,
      // categories: []
    }
  },
  methods: {
    addCategory() {
      firebaseDataBase.create({entity: this.chipName, item: {categoryName: this.category}})
          .then(() => {
            this.$emit('onDataChange')
          })
    }
  },

  created() {
  }

}
</script>

<style scoped>

</style>