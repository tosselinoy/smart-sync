<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column add-design">
      <!--      Input Expense-->
      <q-input v-model="localEditedItem.name" hint="Name of expense"/>
      <!--      Input Price-->
      <q-input type="number" outlined v-model="localEditedItem.price" label="Expense"/>
      <!--      Input Date-->
      <q-input v-model="localEditedItem.date" filled type="date" mask="date" hint="When was the expense made"/>
      <!--Button insert Row-->
      <q-btn class="btn-insert" @click="addRowExpense" color="black" label="Add Expense"/>

    </div>
  </div>
</template>

<script>

import {mapMutations, mapState, mapActions, mapGetters} from "vuex"

export default {
  name: "AddItem",
  props: ['tableName', 'item', 'category'],
  computed: mapState('category', ['editCategory']),
  data() {
    return {
      localEditedItem: {
        name: '',
        price: null,
        // category: '',
        date: '',
      },
      // dense: false,

      // options: [
      //   'Home', 'Butty', 'Car'
      // ]
      model: '',
    }
  },
  methods: {
    ...mapActions('category', ['insertCategory']),
    ...mapMutations('category', ["setEditedItem", 'setCategoryId', 'setSubEntity', 'resetTableId', 'resetSubEntity']),
    //
    addRowExpense() {

      this.setCategoryId(this.$route.params.id);
      this.setSubEntity('tableCategory');
      this.setEditedItem(this.localEditedItem)
      this.insertCategory();
    }
  },
  created() {
    this.setCategoryId(this.$route.params.id);
    this.setSubEntity('tableCategory');

    if (this.item) {
      this.editCategory = this.item;
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

.btn-insert {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
}
</style>