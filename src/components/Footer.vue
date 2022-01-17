<template>
  <div class="footer">
    <footer>
      <nav class="footer">
        <ul class="footer__group">
          <li class="footer__list"><a href="#"> Gestion des cookies </a></li>
          <li class="footer__list"><a href="#"> CGU/CGV </a></li>
          <li class="footer__list"><a href="#"> Mentions légales </a></li>
          <li class="footer__list">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="footer__list">
            <router-link to="/inscription">S'inscrire</router-link>
          </li>
        </ul>

        <ul class="footer__group -reseau">
          <li
            v-for="logoFooter in logosFooter"
            :key="logoFooter"
            style="padding-left: 0"
            class="footer__list -reseau"
          >
            <a href="#">
              <img :src="logoFooter.le_reseaux_social" alt="#" />
            </a>
          </li>
        </ul>

        <ul style="padding-bottom: 2%" class="footer__group">
          <li
            v-for="logoFooterPayement in logosFooterPayement"
            :key="logoFooterPayement"
            class="footer__list"
          >
            <a href="#">
              <img :src="logoFooterPayement.le_moyen_de_payement.url" alt="#" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      logosFooter: null,
      logosFooterPayement: null,
    };
  },
  name: "Footer",
  mounted() {
    axios
      .get("https://mashoo.paulakar.fr/wp-json/acf/v3/options/Infos")
      .then((response) => {
        this.logosFooter = response.data.acf.social_media;
        this.logosFooterPayement = response.data.acf.les_moyens_de_payement;
      });
  },
};
</script>
