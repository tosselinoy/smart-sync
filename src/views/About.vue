<template>
  <div class="about">
    <h1 class="main-text">A little about SmartSync </h1>
    <Accordion/>
  </div>

</template>


<script>
import Accordion from "../components/Accordion";

export default {
  name: 'About',
  components: {
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&display=swap');

.main-text {
  font-family: 'Lato', sans-serif;
  /*font-weight: bold;*/
  color: #7a6a49;
  text-align: center;
}
</style>
