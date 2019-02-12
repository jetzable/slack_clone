<template>
  <div>
    <div class="jumbotron bg-primary text-white text-center">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Instant communication!!!</p>
    </div>
    <div class="alert alert-info text-center" v-if="loading">Loading...</div>

    <div class="alert alert-danger text-center" v-if="hasErrors">
      <div v-for="error in errors" :key="error.id">{{error}}</div>
    </div>

    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-danger btn-lg" @click="loginWithGoogle">Login with Google</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-info btn-lg">Login with Twitter</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable*/
import { config } from "../main.js";
import firebase from "firebase/app";
import auth from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      errors: [],
      loading: false
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    loginWithGoogle() {
      this.loading = true;
      this.errors = [];
      firebase.initializeApp(config);
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          this.$store.dispatch("setUser", { token, user });
          this.$router.push("/");
        })
        .catch(error => {
          this.errors.push(error.message);
          this.loading = false;
        });
    }
  }
};
</script>
