<template>
  <div>
    <AddItem :tableName="tableName"></AddItem>
    <ExpensTable :tableName="tableName" :category="category"/>
  </div>
</template>

<script>
import firebaseDatabase from "../middleware/firebase/database"
import ExpensTable from "../components/TheSystem/ExpensTable";
import AddItem from "../components/TheSystem/AddItem";

export default {
  name: "Category",
  props: [],
  components: {
    AddItem,
    ExpensTable

  },
  data() {
    return {
      category: {},
      categoryID: this.$route.params.id,
      tableName: categoryID
    }
  },
  methods: {
    getCategoryById() {
      this.category = firebaseDatabase.getById({entity: this.tableName, id: this.$route.params.id})
    }
  },
  created() {
    this.getCategoryById();
  }

}
</script>

<style scoped>

</style>