<template>
  <div class="q-pa-md">
    <div class="q-gutter-xs">
      <q-chip class="chip-design" removable v-for="category in expness" @remove="deleteCards(category.id)">
        {{ category.categoryName }}
      </q-chip>

      <!--      <q-btn color="primary" label="Reset" @click="reset" class="q-mt-sm"/>-->
    </div>
  </div>

</template>

<script>
import {mapState, mapActions} from "vuex"

export default {

  name: "Categories",
  props: ['chipName', 'isReload'],
  components: {},
  computed: mapState('cardsCategory', ['expness']),
  data() {
    return {
      model: '',
      // categories: []
    }
  },
  methods: {
    ...mapActions('cardsCategory', ['deleteCards', 'getCards']),

  },
  created() {
    this.getCards();
  }
}
</script>

<style scoped>
.chip-design {
  color: black;
  background-color: #4ba3c7;
}
</style>