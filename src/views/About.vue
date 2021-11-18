<template>
  <div class="about" style="text-align: center">
    <MenuBar></MenuBar>
    <h1>A little about SmartSync </h1>
    <Accordion/>
  </div>

</template>

<style>
</style>

<script>
import Accordion from "../components/Accordion";
import MenuBar from "../components/MenuBar";

export default {
  name: 'About',
  components: {
    MenuBar,
    Accordion
  },
  props: [],
  data() {
    return {}
  },
  methods: {},
  created() {
  }
}
</script>
