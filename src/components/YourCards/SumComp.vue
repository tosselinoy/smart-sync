<template>
  <div>
    <q-card class="card-design rounded-borders">
      <q-card-section>
        <h5>Total expenditure incurred for </h5>
        <h5>{{ category.categoryName }} Category</h5>
        <!--        <h5>Total: {{ totalCategory[category.categoryName] }}</h5>-->
        <h5>check: {{ myTotal }}</h5>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from "vuex"

export default {
  name: "SumComp",
  data() {
    return {}
  },
  computed: {
    ...mapState('category', ['category', 'totalCategory']),
    ...mapGetters('category', ['total']),

    myTotal: function () {
      let total = this.total
      this.sumOfTotalCat(total)
      return total
    }
  },
  methods: {
    ...mapActions('category', ['sumOfTotalCat']),
  },
  created() {

  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@600&family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap');

.card-design {
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  border-color: #7a6a49;
  border-radius: 10% 30% 50% 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  background-color: #dcc9a4;
  max-width: 600px;
  color: #7a6a49;
}

h6, h3, h4 {
  line-height: 0.5;

}
</style>