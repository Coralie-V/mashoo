<template>
  <section class="container">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Connexion</h1>
      <div class="trait_titre_h1"></div>
    </div>
    <form @submit="submit">
      <p if="">
        Wesh alors <span style="color: red">{{ user.displayName }}</span
        >, ton mail -> <span style="color: red">{{ user.email }}</span>
      </p>
      <div class="formulaire">
        <label class="formulaire__label" for="username"
          >Nom d'utilisateur</label
        >
        <span class="formulaire__input"
          ><input type="text" name="username" v-model="form.username"
        /></span>
        <label class="formulaire__label" for="mdp">Mot de passe</label>
        <span class="formulaire__input"
          ><input type="password" name="mot de passe" v-model="form.password"
        /></span>
        <div class="-groupe">
          <span class="formulaire__input -checkbox"
            ><input type="checkbox" name="newslatter" /><span
              class="input__checkbox -new"
            >
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88892 12.8888L7.81755 19.496C8.21408 20.0276 9.00878 20.033 9.41248 19.5068L22.3334 2.66663"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                /></svg
            ></span>
          </span>
          <label for="rest connected" class="formulaire__label"
            >Rester connecté</label
          >
        </div>
        <div class="formulaire__liens">
          <a href="#">Mot de passe oublié ?</a>
          <a href="inscription.html"
            >Vous n'êtes pas encore inscrit ? Inscrivez-vous !</a
          >
        </div>
      </div>
      <button type="submit" class="button__form -centrer">
        <span>Se connecter</span>
      </button>
    </form>
    <div v-if="success">
      <p style="color: green; text-align: center">
        Votre inscription est réussi !
      </p>
    </div>

    <div v-if="error">
      <p style="color: red">{{ errorMessage }}</p>
    </div>
    <button class="-orange -centrer">
      <span
        ><img src="images/logos_google-icon.png" />
        <p>Connexion avec Google</p></span
      >
    </button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      success: false,
      error: false,
      errorMessage: null,
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      console.log(this.form.username);
      console.log(this.form.password);

      axios
        .post("https://mashoo.paulakar.fr/wp-json/jwt-auth/v1/token", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.success = true;
            this.error = false;
            this.$store.commit("setUser", {
              username: response.data.data.displayName,
              email: response.data.data.email,
              authToken: response.data.data.token,
            });
            setTimeout(() => {
              console.log(this.$store.state.user);
            }, 1000);
          }
        })
        .catch((error) => {
          console.log("Error LOG : ", error.response);
          this.errorMessage = error.response.data.message;
          this.error = true;
          this.success = false;
        });
    },
  },
};
</script>
