<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input bottom-slots v-model="salary" label="Please Enter Your Salary" :dense="dense">
        <template v-slot:hint>
          Salary
        </template>

        <template v-slot:append>
          <q-btn @click="insertIncome(salary)" round dense flat icon="add"/>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "InsertIncomeComp",
  data() {
    return {
      salary: null,
      dense: false,
      // categoryName: this.category
    }
  },
  methods: {
    ...mapActions('cardsCategory',['insertIncome'])
  }
}
</script>

<style scoped>

</style>