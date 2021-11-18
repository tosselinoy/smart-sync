<template>
  <div class="home">
    <MenuBar/>
    <h1>Home Page</h1>
  </div>
</template>


<script>
import MenuBar from "../components/MenuBar";

export default {
  name: 'Home',
  props: [],
  components: {
    MenuBar
  },
  data() {
    return {}
  },
  methods: {},
  created() {
  }
}
</script>
