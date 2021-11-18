<template>
  <div class="q-pa-md">
    <div class="q-gutter-xs">
      <!--      <q-chip-->
      <!--          :data="categories"-->
      <!--          :chips="chips"-->
      <!--          chips-key="name"></q-chip>-->
      <q-chip class="chip-design" removable v-for="category in categories" @remove="remove(category.id)"
              v-model="category.name">
        {{ category.categoryName }}
      </q-chip>

      <!--      <q-btn color="primary" label="Reset" @click="reset" class="q-mt-sm"/>-->
    </div>
  </div>

</template>

<script>
import firebaseDataBase from "../middleware/firebase/database";

export default {

  name: "Categories",
  props: ['chipName', 'isReload'],
  components: {},
  data() {
    return {
      model: '',
      categories: []
    }
  },
  methods: {
    read() {
      firebaseDataBase.read({entity: this.chipName})
          .then(result => {
            this.categories = result;
          })
    },
    remove(id) {
      firebaseDataBase.remove({entity: this.chipName, id})
          .then(() => {
            this.read();
          })
    }
  },
  watch: {
    isReload() {
      this.read();
    }
  },
  created() {
    this.read();
  }

}
</script>

<style scoped>
.chip-design {
  color: black;
  background-color: #4ba3c7;
}
</style>