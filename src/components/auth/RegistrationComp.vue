<template>
  <div class="q-pa-md row items-start q-gutter-md design-card">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Let's sign up :)</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="email" filled type="email" hint="Insert your mail" />

        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
          <template v-slot:append>
            <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            />
          </template>
        </q-input>


      </q-card-section>

      <q-separator inset />

      <q-card-section class="design-card">
        <q-btn class="btn-design" @click="register()" rounded label="Connect" />
      </q-card-section>
    </q-card>
  </div>
<!--  <div>-->
<!--    <div calss="q-pa-md q-gutter-sm">-->
<!--      <div class="q-gutter-md row items-start">-->
<!--        &lt;!&ndash;      Email Input&ndash;&gt;-->
<!--        <q-input v-model="email" filled type="email" hint="Email"/>-->

<!--        &lt;!&ndash;      Password Inpute&ndash;&gt;-->
<!--        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">-->
<!--          <template v-slot:append>-->
<!--            <q-icon-->
<!--                :name="isPwd ? 'visibility_off' : 'visibility'"-->
<!--                class="cursor-pointer"-->
<!--                @click="isPwd = !isPwd"-->
<!--            />-->
<!--          </template>-->
<!--        </q-input>-->

<!--        &lt;!&ndash;      Register Button&ndash;&gt;-->
<!--        <q-btn @click="register()" class="glossy" rounded color="deep-orange" label="Register"/>-->

<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import firebaseInstance from "../../middleware/firebase";
export default {
  name: "RegistrationComp",
  props: [],
  data() {
    return {
      password: '',
      isPwd: true,

      email: '',
    }
  },
  methods: {
    register() {
      firebaseInstance.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            var user = userCredential.user;
            window.user = user
            this.$router.push('/home');
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error)
          });
    }
  },
  created() {
    this.register();
  }
}
</script>

<style scoped>
.my-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  /*width: 100%;*/
  max-width: 500px;
  color: #7a6a49;
  font-size: 10px;
  border-radius: 30px;
  border-color: #7a6a49;
  border-width: 3px;

}
.text-h6 {
  font-family: 'Azeret Mono', monospace;
  font-size: 40px;
  line-height: 1;

}
input{
  font-family: 'Raleway', sans-serif;
  font-size: 60px;
}
.design-card {
  text-align: center;
}

.btn-design {
  font-weight: bold;
  background-color: #dcc9a4;
  color: #7a6a49;
}


</style>