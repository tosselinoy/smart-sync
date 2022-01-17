<template>
  <div class="q-pa-md">
    <q-table
        class="table-style"
        :title="category.categoryName"
        :data="rows"
        :columns="columns"
        :filter="filter"
        no-data-label="You have not yet entered expenses for this category"
        row-key="name"
        binary-state-sort
    >
      <!--      Change Thead color-->
      <template v-slot:header="props">
        <q-tr :props="props">
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

      <!--      Add Search Button-->
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>

      <!--      Slot  Table-->
      <template v-slot:body="props">
        <q-tr class="row-design" :props="props">

          <q-td key="expense" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="popupEditData"
                          @show="showPopup(props.row.name)"
                          @save="update(props.row.id, {name: popupEditData})">
              <q-input v-model="popupEditData" dense autofocus counter/>
            </q-popup-edit>
          </q-td>

          <q-td key="price" :props="props">
            {{ props.row.price}}
            <q-popup-edit v-model="popupEditData" title="Update The Price" buttons
                          @show="showPopup(props.row.price)"
                          @save="update(props.row.id, {price: popupEditData})">
              <q-input type="number" v-model="popupEditData" dense autofocus/>
            </q-popup-edit>
          </q-td>

          <q-td key="date" :props="props">
            {{ props.row.date }}
            <q-popup-edit v-model="popupEditData" title="Update Date" buttons persistent
                          @show="showPopup(props.row.date)"
                          @save="update(props.row.id, {date: popupEditData})">
              <q-input v-model="popupEditData" dense autofocus hint="Use buttons to close" filled type="date"/>
            </q-popup-edit>
          </q-td>

          <q-td key="action" :props="props">
            <q-btn class="btn-style" @click="deleteCategory(props.row.id)">
              Delete
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
<!--    <div>{{category}}</div>-->
  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex"

export default {
  name: "ExpensTable",
  props: ['tableName'],

  data() {
    return {
      model: '',
      filter: '',
      columns: [
        {name: 'expense', required: true, label: 'Expense', align: 'left', field: row => row.name, sortable: true},
        {name: 'price', align: 'left', label: 'Price', field: 'price', sortable: true},
        {name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true},
        {name: 'action', align: 'center', label: 'Actions'},
      ],
      // rows: [],
      popupEditData: ''
    }
  },
  computed: {
    ...mapState('category', ['editedItemId', 'category']),
    ...mapState('cardsCategory', ['expness']),
    rows: function () {
      return JSON.parse(JSON.stringify(this.category.tableCategory))
    }
  },
  methods: {
    ...mapActions('category', ['deleteCategory', 'getCategory', 'updateItem', 'checkForData']),
    ...mapMutations('category', ['setEditedItemId', 'setCategoryId', 'setSubEntity', 'resetTableId', 'resetSubEntity', 'setItemUpdate']),
    ...mapActions('cardsCategory', ['getCards']),

    showPopup(data) {
      this.popupEditData = data;
    },

    update(id, item) {
      this.setEditedItemId(id)
      this.setItemUpdate(item)
      this.updateItem();
    }
  },

  // watch: {
  //   category() {
  //     this.rows = JSON.parse(JSON.stringify(this.category.tableCategory));
  //   }
  // },

   created() {
    this.setCategoryId(this.$route.params.id);
    this.setSubEntity('tableCategory');


    // this.rows = JSON.parse(JSON.stringify(this.category.tableCategory));
  },

  destroyed() {
    this.resetTableId();
    this.resetSubEntity();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@600&family=PT+Sans:wght@700&family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap');

.table-style{
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

.btn-style {
  background-color: #aa9875;
  color: black;
  /*font-weight: bold;*/
  font-size: 13px;
  font-family: 'PT Sans', sans-serif;
}
</style>