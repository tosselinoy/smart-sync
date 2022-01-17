<template>
  <div>
    <AddItem :tableName="tableName"></AddItem>
    <ExpensTable :tableName="tableName"/>
    <SumComp></SumComp>
  </div>
</template>

<script>
import ExpensTable from "../../components/TheSystem/ExpensTable";
import AddItem from "../../components/TheSystem/AddItem";
import SumComp from "../../components/YourCards/SumComp";
import {mapActions, mapState} from "vuex";

export default {
  name: "Category",
  props: [],
  components: {
    AddItem,
    ExpensTable,
    SumComp
  },
  computed: {
    ...mapState('category', ['category']),
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
    ...mapActions('category', ['checkForData']),

  },
  async created() {
    if (Object.keys(this.category).length === 0) {
      await this.checkForData();
    }
  }

}
</script>

<style scoped>

</style>