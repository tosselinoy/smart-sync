<template>
  <div>
    <!--    <AddItem :tableName="tableName" @onDataChange="reloadCate()"></AddItem>-->
    <!--    <ExpensTable :tableName="tableName" :category="category" :isReload="isReload"/>-->
    <AddItem :tableName="tableName"></AddItem>
    <ExpensTable :tableName="tableName"/>
    <SumComp></SumComp>
  </div>
</template>

<script>
import firebaseDatabase from "../../middleware/firebase/database"
import ExpensTable from "../../components/TheSystem/ExpensTable";
import AddItem from "../../components/TheSystem/AddItem";
import SumComp from "../../components/YourCards/SumComp";

export default {
  name: "Category",
  props: [],
  components: {
    AddItem,
    ExpensTable,
    SumComp
  },
  data() {
    return {
      // category: {},
      categoryID: this.$route.params.id,
      tableName: 'expness',
      // isReload: false,
      item: '',
    }
  },
  methods: {
    // getCategoryById() {
    //   firebaseDatabase.getById({entity: this.tableName, id: this.$route.params.id}).then(res => {
    //     this.category = res;
    //   })
    // },

  },
  created() {
    // this.getCategoryById();
  }

}
</script>

<style scoped>

</style>