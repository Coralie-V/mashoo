<template>
  <section class="container min-height">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Profil</h1>
      <div class="trait_titre_h1"></div>
    </div>

    <h2>MES PRÉCOMMANDES</h2>

    <div v-if="shoes.length">
      <div class="precommande" v-for="shoe in shoes" :key="shoe.id">
        <div class="precommande_info">
          <img :src="shoe.acf.image_URL" alt="" />

          <p>{{ shoe.title.rendered }}</p>
          <p>Date de commande : 13/12/2021</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shoes: [],
    };
  },
  created() {
    axios
      .get(`https://mashoo.paulakar.fr/wp-json/wp/v2/shoes?author=${this.$store.state.user.id}`)
      .then(response => {
        console.log('profil : ',response.data)
        this.shoes = response.data
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
