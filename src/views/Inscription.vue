<template>
  <section class="container min-height">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Inscription</h1>
      <div class="trait_titre_h1"></div>
    </div>
    <form @submit="submit">
      <div class="formulaire">
        <label class="formulaire__label" for="email">Email</label>
        <span class="formulaire__input"
          ><input type="email" name="email" v-model="form.email"
        /></span>

        <label class="formulaire__label" for="username"
          >Nom d'utilisateur</label
        >
        <span class="formulaire__input"
          ><input type="text" name="username" v-model="form.username"
        /></span>
        <label class="formulaire__label" for="mdp">Mot de passe</label>

        <span class="formulaire__input"
          ><input type="password" name="ConfirmMdp" v-model="form.password"
        /></span>

        <div class="formulaire__newsletter">
          <span class="formulaire__input -checkbox">
            <input type="checkbox" name="newsletter" />
            <span class="input__checkbox -new">
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
                />
              </svg>
            </span>
          </span>
          <label for="newsletter" class="formulaire__label"
            >S’inscrire à la newsletter et recevoir les nouveautés concernant
            les produits de la marque par mail</label
          >
        </div>
        <label for="condition général" class="formulaire__label -condition"
          >En créant un compte, vous acceptez les conditions générales
          d’utilisation ainsi que les politiques de confidentialités
        </label>
      </div>
      <button class="button__form -centrer" type="submit">S'inscrire</button>
    </form>

    <div v-if="success">
      <p style="color: green">Votre inscription est réussi !</p>
    </div>

    <div v-if="error">
      <p style="color: red">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: null,
        email: null,
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

      axios
        .post("https://mashoo.paulakar.fr/wp-json/wp/v2/users/register", {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.success = true;
            this.error = false;
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
