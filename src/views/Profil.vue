<template>
  <section class="container min-height">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Profil</h1>
      <div class="trait_titre_h1"></div>
    </div>

    <h2>MES PRÉCOMMANDES</h2>

    <div class="list_precommande" v-if="shoes.length">
      <div class="precommande" v-for="shoe in shoes" :key="shoe.id">
        <div class="precommande_info">
          <img :src="shoe.acf.image_URL" alt="" />
          <p>{{ shoe.title.rendered }}</p>
          <p>Précommandé le {{ shoe.date | formatDate }}</p>
          <button class="btn_delete" v-on:click="deleteShoe(shoe.id)">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from "moment";

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format(" MM/DD/YYYY à hh:mm");
  }
});
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      shoes: [],
    };
  },

  methods: {
    getData() {
      this.axios
        .get(
          `https://mashoo.paulakar.fr/wp-json/wp/v2/shoes?author=${this.$store.state.user.id}`
        )
        .then((result) => {
          console.warn(result);
          this.shoes = result.data;
        });
    },
    deleteShoe(id) {
      this.axios
        .delete("https://mashoo.paulakar.fr/wp-json/wp/v2/shoes/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.user.authToken}`,
          },
        })

        .then(() => {
          this.getData();
        });
    },
  },
  created() {
    axios
      .get(
        `https://mashoo.paulakar.fr/wp-json/wp/v2/shoes?author=${this.$store.state.user.id}`
      )
      .then((response) => {
        console.log("profil : ", response.data);
        this.shoes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
