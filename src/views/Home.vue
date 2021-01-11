<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button @click="signOut">Cerrar sesión</ion-button>
        </ion-buttons>
        <ion-title>Demo universe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-card>
        <img src="../assets/Sun.jpg" />
        <ion-card-header>
          <ion-card-title>Sol</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!readMoreActivated">
          {{ sunContent.slice(0, 200) }}
          <ion-button
            color="success"
            v-if="!readMoreActivated"
            @click="activateReadMore"
          >
            Ver mas...
          </ion-button>
        </ion-card-content>
        <ion-card-content v-if="readMoreActivated">
          {{ sunContent }}
          <ion-button
            color="success"
            v-if="readMoreActivated"
            @click="activateReadMore"
          >
            Ver menos...
          </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <img src="../assets/Mars.jpg" />
        <ion-card-header>
          <ion-card-title>Marte</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!readMoreActivated">
          {{ loremContent.slice(0, 200) }}
          <ion-button
            color="success"
            v-if="!readMoreActivated"
            @click="activateReadMore"
          >
            Ver mas...
          </ion-button>
        </ion-card-content>
        <ion-card-content v-if="readMoreActivated">
          {{ loremContent }}
          <ion-button
            color="success"
            v-if="readMoreActivated"
            @click="activateReadMore"
          >
            Ver menos...
          </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <img src="../assets/Galaxy.jpg" />
        <ion-card-header>
          <ion-card-title>Galaxia</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!readMoreActivated">
          {{ loremContent.slice(0, 200) }}
          <ion-button
            color="success"
            v-if="!readMoreActivated"
            @click="activateReadMore"
          >
            Ver mas...
          </ion-button>
        </ion-card-content>
        <ion-card-content v-if="readMoreActivated">
          {{ loremContent }}
          <ion-button
            color="success"
            v-if="readMoreActivated"
            @click="activateReadMore"
          >
            Ver menos...
          </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <img src="../assets/SistemaSolar.png" />
        <ion-card-header>
          <ion-card-title>Sistema solar</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!readMoreActivated">
          {{ loremContent.slice(0, 200) }}
          <ion-button
            color="success"
            v-if="!readMoreActivated"
            @click="activateReadMore"
          >
            Ver mas...
          </ion-button>
        </ion-card-content>
        <ion-card-content v-if="readMoreActivated">
          {{ loremContent }}
          <ion-button
            color="success"
            v-if="readMoreActivated"
            @click="activateReadMore"
          >
            Ver menos...
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { app } from "../database/firebase";
export default {
  name: "home",
  data() {
    return {
      sunContent: ` Es una estrella de tipo-G de la secuencia principal y clase de
          luminosidad V que se encuentra en el centro del sistema solar y
          constituye la mayor fuente de radiación electromagnética de este
          sistema planetario. Es una esfera casi perfecta de plasma, con un
          movimiento convectivo interno que genera un campo magnético a través
          de un proceso de dinamo. Cerca de tres cuartas partes de la masa del
          Sol constan de hidrógeno; el resto es principalmente helio, con
          cantidades mucho más pequeñas de elementos, incluyendo el oxígeno,
          carbono, neón y hierro.`,
      loremContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum vitae mauris ut aliquet. Nulla tincidunt velit eget feugiat dignissim. Mauris molestie velit et risus venenatis consectetur. Mauris ut maximus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sollicitudin nulla elit, quis interdum justo volutpat a. Nam sagittis nisl nibh, dapibus tempor ex elementum ac. Duis vel libero laoreet, ultricies diam sit amet, bibendum lorem. Ut augue mi, dapibus non velit quis, ullamcorper dignissim dolor. Curabitur at magna sit amet risus tristique ultricies ut quis lorem. Mauris sed ipsum interdum, scelerisque risus eu, eleifend sem. Nullam volutpat eros nec eros luctus, bibendum sodales purus luctus. Aliquam sit amet leo eu eros rhoncus sagittis.`,
      readMoreActivated: false,
    };
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = !this.readMoreActivated;
    },
    async signOut(){
      await app.auth().signOut().then(()=> {
        this.$router.replace({path: "/login"});
      }).catch((error) => {
        console.log(error);
      })

      }
  },
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
