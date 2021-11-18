<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column add-design">

      <!--      Input Expense-->

      <q-input v-model="editedItem.name" hint="Name of expense"/>

      <!--      Input Price-->
      <q-input type="number" outlined v-model="editedItem.price" label="Expense"/>

      <!--      Select Category-->
      <!-- equivalent -->
      <q-select
          label="Category"
          transition-show="flip-up"
          transition-hide="flip-down"
          filled
          v-model="editedItem.category"
          :options="options"
      />
      <!--      Input Date-->
      <q-input v-model="editedItem.date" filled type="date" hint="When was the expense made"/>

      <!--Button insert Row-->
      <q-btn class="btn-insert" @click="addRowExpense()" color="black" label="Add Expense"/>

    </div>
  </div>
</template>

<script>
// import localStorageDriver from "../middleware/localStorage"
// import api from "../middleware/api"
import firebaseDataBase from "../middleware/firebase/database";

export default {
  name: "AddItem",
  props: ['tableName', 'item','category"'],
  data() {
    return {
      editedItem: {
        name: '',
        price: 0,
        category: '',
        date: '',
        // dense: false
      },
      model: '',

      options: [
        'Home', 'Butty', 'Car'
      ]
    }
  },
  methods: {
    addRowExpense() {
      firebaseDataBase.create({entity: this.tableName, item: this.editedItem})
          .then(() => {
            this.$emit('onDataChange')
          })
    }
  },
  created() {
    if (this.item) {
      this.editedItem = this.item;
    }
  }
}
</script>

<style scoped>
.add-design {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
}
.btn-insert{
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
}
</style>