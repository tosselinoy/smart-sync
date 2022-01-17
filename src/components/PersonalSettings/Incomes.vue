<template>
  <div class="main-container">
    <div class="cards">
      <div class="card card-3" v-for="(salary,index) of income" :key="index">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
<!--        <h2 class="card__title">Your Income:</h2>-->
        <h2 class="card__title">{{ salary.salary }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";

export default {
  name: "incomes",
  computed: mapState('cardsCategory',['income']),
  methods:{
    ...mapActions('cardsCategory',['getIncome'])
  },
  created() {
    this.getIncome()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.heading__credits .heading__link {
  color: inherit;
}

/* CARDS */

.cards {
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  justify-content: space-between;
}

.card {
  margin: 20px;
  padding: 20px;
  width: 300px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

/* CARD BACKGROUNDS */
.card-3 {
  background: radial-gradient(#76b2fe, #b69efe);
}

/* RESPONSIVE */
@media (max-width: 1600px) {
  .cards {
    justify-content: center;
  }
}

</style>