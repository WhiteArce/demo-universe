<template>
  <ion-page>
    <ion-content padding center text-center>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-title text-center>Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="login()">
        <ion-item>
          <ion-label position="floating">Correo electronico</ion-label>
          <ion-input type="email" @ionInput="email = $event.target.value"></ion-input>
        </ion-item>
        <br /><br />
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" @ionInput="password = $event.target.value"></ion-input> </ion-item
        >
       
        <br /><br /><br /><br />
        <ion-button type="submit" color="success" expand="block"
          >Login</ion-button
        ><br /><br />

         <ion-label
          >No tienes cuenta?
          <a href="/signup">Registrate</a>
        </ion-label>
      </form>

    </ion-content>
  </ion-page>
</template>

<script>
import { app } from "../database/firebase";

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
         const user = await app.auth().signInWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
ion-title {
  margin-top: 5vh;
  margin-bottom: 5vh;
}
</style>
