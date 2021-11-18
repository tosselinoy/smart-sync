<template>
  <div>
    <AddItem :tableName="tableName" :item="item" @onDataChange="reloadTable()"></AddItem>
    <ExpensTable :tableName="tableName" :isReload="isReload"></ExpensTable>
  </div>
</template>
<script>
import localStorageDriver from "../middleware/localStorage";
import AddItem from "../components/TheSystem/AddItem";
import ExpensTable from "../components/TheSystem/ExpensTable";

export default {
  name: "System",
  props: [],
  components: {
    ExpensTable, AddItem,
  },
  data() {
    return {
      item: {},
      tableName: 'items',
      isReload: false
    }
  },
  methods: {
    getItemById() {
      this.item = localStorageDriver.getItemById(this.tableName, this.$route.params.id);
    },
    reloadTable() {
      this.isReload = !this.isReload;

    },

  },
  created() {
    this.getItemById();
  }
}
</script>

<style scoped>

</style>