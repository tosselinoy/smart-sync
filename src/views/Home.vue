<template>
  <div>
    <h1>Smart Sync</h1>
    <hr>
    <ChatBox></ChatBox>
  </div>

</template>


<script>

import DashBord from "../components/YourCards/DashBord";
import ChatBox from "../components/ChatBox";

export default {
  name: 'Home',
  props: [],
  components: {
    ChatBox,
    DashBord
  },
  data() {
    return {}
  },
  methods: {},
  created() {
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@600&family=PT+Sans:wght@700&family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap');
h1{
  text-align:center;
  color: #7a6a49;
  font-weight: bold;
  font-size: 5rem;
  font-family: 'PT Sans', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #333;
  line-height: 1.5;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(to bottom left,#f9e4c1, #dcc9a4);
}
hr{
  width: 17%;
  size: 1rem;
  color: #dcc9a4;
  margin-bottom: 7px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5px;
}
</style>
