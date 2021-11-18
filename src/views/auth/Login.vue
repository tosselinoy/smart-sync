<template>
  <div>
    <!--    <q-btn @click="loginWithGoogle()">Login</q-btn>-->
    <SignInComp/>
  </div>
</template>


<script>
import firebaseInstance from '../../middleware/firebase'
import SignInComp from "../../components/auth/SignInComp";

export default {
  name: "Login",
  props: [],
  components: {
    SignInComp
  },
  data() {
    return {}
  },
  methods: {},
  created() {
    //If the user is already connected. the user will Push to Home without Login.
    // if(window.user){
    //   this.$router.push('/home')
    // }
  }
}

</script>

<style scoped>

</style>