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

        <!-- <ul class="footer__group -reseau">
          <li
            :key="logoFooter.acf.social_media.le_reseaux_social"
            v-for="logoFooter in logosFooter"
            style="padding-left: 0"
            class="footer__list -reseau"
          >
            <a href="#">
              <img
                :src="logoFooter.acf.social_media.le_reseaux_social"
                alt="instagram"
              />
            </a>
          </li>
        </ul> -->

        <ul style="padding-bottom: 2%" class="footer__group">
          <li class="footer__list">
            <a href="#"> <img src="images/american.png" alt="american" /> </a>
          </li>
          <li class="footer__list">
            <a href="#"> <img src="images/applepay.png" alt="applepay" /> </a>
          </li>
          <li class="footer__list">
            <a href="#">
              <img src="images/mastercard.png" alt="mastercard" />
            </a>
          </li>
          <li class="footer__list">
            <a href="#"> <img src="images/visa.png" alt="visa" /> </a>
          </li>
          <li class="footer__list">
            <a href="#"> <img src="images/paypal.png" alt="paypal" /> </a>
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
      logoFooter: null,
    };
  },
  name: "Footer",
  mounted() {
    axios
      .get("https://mashoo.paulakar.fr/wp-json/acf/v3/options/Infos")
      .then((reponse) => {
        this.logoFooter = reponse.data;
        console.log("Répéteur info logo " + this.logoFooter);
      });
  },
};
</script>
