<template>
  <ion-page>
    <ion-content padding center text-center>
      <ion-header translucent>
        <ion-toolbar color="primary">
          <ion-title text-center>Signup</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="register()">
        <ion-item>
          <ion-label position="floating">Correo electronico</ion-label>
          <ion-input
            type="email"
            @ionInput="email = $event.target.value"
          ></ion-input>
        </ion-item>
        <br /><br />
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input
            type="password"
            @ionInput="password = $event.target.value"
          ></ion-input> </ion-item
        ><br /><br />
        <ion-button type="submit" color="success" expand="block"
          >Registrar</ion-button
        ><br /><br />
        <ion-label
          >Ya tienes una cuenta?
          <a href="/login">Inicia sesion</a>
        </ion-label>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { app } from "../database/firebase";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const user = await app
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ path: "/home" });
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
