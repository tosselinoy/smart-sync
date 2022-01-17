<template>
  <div class="q-pa-md">
    <q-table class="table-style"
             title="Total all expenses"
             :data="getData"
             :columns="columns"
             row-key="name"
    >
      <template v-slot:header="props">
        <q-tr class="row-design" :props="props">
          <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="color-label"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <q-tr>
        <q-td key="expense" v-for="key of totalCards ">
          {{ key.name }}
        </q-td>

        <q-td key="price">
          {{ totalCards.total }}
        </q-td>
      </q-tr>

      <template class="t-footer" v-slot:bottom-row>
        <q-tr></q-tr>
        <q-td>
          Sum Of All
        </q-td>
        <q-td>
          {{ totalOfAllTotals }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from "vuex";

export default {
  name: "SumTable",
  computed: {
    ...mapState('cardsCategory', ['expness', 'totalCards']),
    ...mapGetters('cardsCategory', ['total', 'totalOfAllTotals']),
    getData: function () {
      let total = this.total;
      return total
      // return JSON.parse(JSON.stringify(this.expness));
    }
  },

  data() {
    return {
      columns: [
        {
          name: 'expense',
          required: true,
          label: 'Category',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        {name: 'price', align: 'left', label: 'Total', field: 'total', sortable: true},
      ],
    }
  },
  methods: {
    ...mapActions('cardsCategory', ['getCards', 'deleteCards', 'totalCardsCategories']),

  },

  created() {
    this.totalCardsCategories();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@600&family=PT+Sans:wght@700&family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap');

.table-style {
  color: #7a6a49;
  font-weight: bold;
  font-size: 20px;
  font-family: 'PT Sans', sans-serif;
}

.color-label {
  color: #7a6a49;
  font-weight: bold;
  font-size: 15px;
  font-family: 'PT Sans', sans-serif;
}

.row-design {
  font-family: 'Raleway', sans-serif;
  color: #1f2d34;
  font-weight: bold;
  /*font-size: 100px;*/
}

.t-footer {
  font-weight: bold;
  font-size: 15px;
  font-family: 'PT Sans', sans-serif;
}
</style>