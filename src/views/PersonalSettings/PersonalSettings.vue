<template>
  <div>
<!--    <h1>Personal Settings Page</h1>-->
    <AddCategory :chipName="chipName" @onDataChange="reloadCate()"></AddCategory>
    <Categories :chipName="chipName" :isReload="isReload"></Categories>

    <Categories/>
  </div>
</template>

<script>
import AddCategory from "../components/PersonalSettings/AddCategory";
import Categories from "../components/PersonalSettings/Categories";

export default {
  name: "PersonalSettings",
  props: [],
  components: {
    Categories,
    AddCategory
  },
  data() {
    return {
      chipName: 'expness',
      isReload: false
    }
  },
  methods: {
    reloadCate() {
      this.isReload = !this.isReload;
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>