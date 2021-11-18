<template>
  <div>
    <Cards :chipName="chipName"></Cards>
  </div>
</template>

<script>
import Cards from "../../components/YourCards/Cards";

export default {
  name: "CardsOfTables",
  props: [],
  components: {Cards},

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