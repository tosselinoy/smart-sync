<template>
  <div>
    <Cards :chipName="chipName"></Cards>
    <SumTable :chipName="chipName"></SumTable>
<!--    <DashBord/>-->
  </div>
</template>

<script>
import Cards from "../../components/YourCards/Cards";
import SumTable from "../../components/YourCards/SumTable";
import {mapState, mapActions} from "vuex";
import DashBord from "../../components/YourCards/DashBord";

export default {
  name: "CardsOfTables",
  props: [],
  components: {DashBord, SumTable, Cards},
  computed: {...mapState('cardsCategory', ['expness'])},

  data() {
    return {
      chipName: 'expness',
    }
  },
  methods: {
    ...mapActions('cardsCategory', ['getCards'])
  },
  async created() {

    if (this.expness.length === 0) {
      await this.getCards()
    }
  }
}
</script>

<style scoped>

</style>