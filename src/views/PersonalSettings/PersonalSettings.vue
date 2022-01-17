<template>
  <div>
    <AddCategory :chipName="chipName"></AddCategory>
    <Categories :chipName="chipName"></Categories>
  </div>
</template>

<script>
import AddCategory from "../../components/PersonalSettings/AddCategory";
import Categories from "../../components/PersonalSettings/Categories";
import InsertIncomeComp from "../../components/PersonalSettings/InsertIncomeComp";
import Incomes from "../../components/PersonalSettings/Incomes";

export default {
  name: "PersonalSettings",
  props: [],
  components: {
    Incomes,
    InsertIncomeComp,
    Categories,
    AddCategory
  },
  data() {
    return {
      chipName: 'expness',
    }
  },
  methods: {},
  created() {
  }
}
</script>

<style scoped>

</style>