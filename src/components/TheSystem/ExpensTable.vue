<template>
  <div class="q-pa-md">
    {{ category }}
    <br><br>
    {{ rows }}
    <q-table
        :title="category.categoryName"
        :data="rows"
        :columns="columns"
        :filter="filter"
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
              class="text-italic text-purple"
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
        <q-tr :props="props">

          <q-td key="expense" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" @save="update(props.row.id, {name: props.row.name})">
              <q-input v-model="props.row.name" dense autofocus counter/>
            </q-popup-edit>
          </q-td>

          <q-td key="price" :props="props">
            {{ props.row.price }}
            <q-popup-edit v-model="props.row.price" title="Update The Price" buttons
                          @save="update(props.row.id, {price: props.row.price})">
              <q-input type="number" v-model="props.row.price" dense autofocus/>
            </q-popup-edit>
          </q-td>

          <!--          <q-td key="category" :props="props">-->
          <!--            <div class="text-pre-wrap">{{ props.row.category }}</div>-->
          <!--            <q-popup-edit v-model="props.row.category" @save="update(props.row.id,{category: props.row.category})">-->
          <!--              <q-select-->
          <!--                  label="Category"-->
          <!--                  transition-show="flip-up"-->
          <!--                  transition-hide="flip-down"-->
          <!--                  filled-->
          <!--                  v-model="props.row.category"-->
          <!--                  :options="options"-->
          <!--                  style="width: 150px"-->
          <!--              />-->
          <!--            </q-popup-edit>-->
          <!--          </q-td>-->

          <q-td key="date" :props="props">
            {{ props.row.date }}

            <q-popup-edit v-model="props.row.date" title="Update Date" buttons persistent
                          @save="update('props.row.id, {date: props.row.date}')">
              <q-input v-model="props.row.date" dense autofocus hint="Use buttons to close" filled type="date"/>
            </q-popup-edit>
          </q-td>

          <q-td key="action" :props="props">
            <q-btn @click="deleteCategory(props.row.id)">
              Delete
            </q-btn>
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
// import localStorageDriver from "../middleware/localStorage"
// import api from "../middleware/api"
// import firebaseDataBase from "../../middleware/firebase/database";
import {mapMutations, mapState, mapActions} from "vuex"

export default {
  name: "ExpensTable",
  // props: ['tableName', 'isReload', 'category'],
  props: ['tableName'],

  data() {
    return {
      // selectors:
      // options: ['Home', 'Butty', 'Car'],

      model: '',
      filter: '',
      columns: [
        {name: 'expense', required: true, label: 'Expense', align: 'left', field: row => row.name, sortable: true},
        {name: 'price', align: 'left', label: 'Price', field: 'price', sortable: true},
        // {name: 'category', align: 'left', label: 'Category', field: 'category', sortable: true, style: 'width: 10px'},
        {name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true},
        {name: 'action', align: 'center', label: 'Actions'},
      ],
      rows: []
    }
  },
  computed: {
    ...mapState('category', ['editedItemId', 'category']),
    ...mapState('cardsCategory', ['expness']),

    // rows: function (){
    //   return JSON.parse(JSON.stringify(this.category.tableCategory))
    // }
  },
  methods: {
    ...mapActions('category', ['deleteCategory', 'getCategory', 'updateItem', 'checkForData']),
    ...mapMutations('category', ['setEditedItemId', 'setCategoryId', 'setSubEntity', 'resetTableId', 'resetSubEntity', 'setItemUpdate']),
    ...mapActions('cardsCategory', ['getCards']),

    // read() {
    //   firebaseDataBase.read({entity: this.tableName, tableId: this.$route.params.id, subEntity: 'tableCategory'})
    //       .then(result => {
    //         this.rows = result;
    //       })
    // },

    // remove(id) {
    //   firebaseDataBase.remove({entity: this.tableName, tableId: this.$route.params.id, subEntity: 'tableCategory', id})
    //       .then(() => {
    //         // this.read();
    //       })
    // },

    update(id, item) {
      debugger
      this.setEditedItemId(id)
      this.setItemUpdate(item)
      this.updateItem();
    }

    // update(id, item) {
    //   this.updateItem()
    //   firebaseDataBase.update({
    //     entity: this.tableName,
    //     tableId: this.$route.params.id,
    //     subEntity: 'tableCategory',
    //     id,
    //     item
    //   })
    //       .then(() => {
    //         // this.read();
    //       })
    // },
  },
  // watch: {
  //   isReload() {
  //     this.read();
  //   }
  // },
  async created() {
    debugger
    this.setCategoryId(this.$route.params.id);
    this.setSubEntity('tableCategory');
    if (Object.keys(this.category).length == 0) {
      await this.checkForData();
    }
      this.rows = JSON.parse(JSON.stringify(this.category.tableCategory));
    // this.rows = [...this.category.tableCategory]

  },
  watch: {
    category() {
      debugger
      this.rows = JSON.parse(JSON.stringify(this.category.tableCategory));
    }
  },

  // this.getCategory();
  // firebaseDataBase.getRef()
  //     .on('child_changed', (snapshot) => {
  //       this.getCategory();
  //     });
  // },
  destroyed() {
    this.resetTableId();
    this.resetSubEntity();
  }
}
</script>

<style scoped>
</style>