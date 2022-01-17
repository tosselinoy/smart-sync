<template>
  <div class="design-card">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">SignIn</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="email" filled type="email" hint="Insert your mail"/>
        <q-input class="pass-des" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password">
          <template v-slot:append>
            <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn class="btn-design" @click="loginWithPassword" rounded label="Connect"/>
      </q-card-section>

      <q-separator inset/>

      <q-card-section class="design-card">
        <q-btn class="btn-design" @click="moveToRegister()" rounded label="Not register yet?!"/>
        <div class="btn-google">
          <q-btn class="btn-design" @click="loginWithGoogle()" rounded label="Login with google"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import firebaseInstance from "../../middleware/firebase";

export default {
  name: "SignInComp",
  props: [],
  data() {
    return {
      password: '',
      isPwd: true,
      email: '',
    }
  },
  methods: {
    loginWithPassword() {
      firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.user = user;
            this.$router.push('/')
            window.location.reload(false);

            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
    },

    loginWithGoogle() {
      const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account"
      });
      firebaseInstance.firebase.auth().signInWithRedirect(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            // var credential = result.credential;
            // var token = credential.accessToken;
            // var user = result.user;
            window.user = result.user;
            this.$router.push('/')
            window.location.reload(false);
          }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },

    loginWithFaceBook() {

    },
    moveToRegister() {
      this.$router.push('/register')
    }
  },

  created() {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@600&family=Raleway:wght@100&display=swap');

.my-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  /*width: 100%;*/
  max-width: 400px;
  color: #7a6a49;
  font-size: 10px;
  border-radius: 30px;
  border-color: #7a6a49;
  border-width: 3px;
}

.text-h6 {
  font-family: 'Azeret Mono', monospace;
  font-size: 40px;
}

input {
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

.btn-google {
  padding: 10px;
}

</style>