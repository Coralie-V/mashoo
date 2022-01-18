<template>
  <div class="Accueil min-height">
    <header
      v-bind:style="{ backgroundImage: 'url(' + background.acf.banner + ')' }"
      v-if="background"
    >
      <div class="banner">
        <div class="header_chapo">
          <h1>Découvrez la nouvelle paire de sneakers Mashoo</h1>
          <p>Une chaussure unique, totalement personnalisable.</p>
          <p id="price">70€</p>
        </div>
        <div class="header__shoe">
          <img
            class="header__img"
            src="@/assets/images/header-basket.png"
            alt="image chaussure"
          />
          <button
            onclick="window.location.href='http://localhost:8080/Personnalisation'"
            class="button__form"
            id="header__btn"
          >
            Personnaliser
          </button>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="histoire_marque">
        <div class="TitleH2">
          <div class="traitGauche"></div>
          <h2>Histoire de la marque</h2>
        </div>

        <div class="paragraph">
          <img src="@/assets/images/histoire_chaussure.png" alt="" />

          <p>
            Mashoo est une société qui propose à ses clients d’acheter sa propre
            paire de sneakers totalement personnalisable. Nous offrons la
            possibilité de choisir la couleurs de chaque composant de la
            chaussure.
          </p>
        </div>

        <div class="paragraph">
          <p>
            Mashoo est une société qui propose à ses clients d’acheter sa propre
            paire de sneakers totalement personnalisable. Nous offrons la
            possibilité de choisir la couleurs de chaque composant de la
            chaussure.
          </p>

          <img
            class="histoire_chaussure_II"
            src="@/assets/images/histoire_chaussure_II.png"
            alt=""
          />
        </div>
      </div>

      <div class="TitleH2">
        <div class="traitGauche"></div>
        <h2>INSPIRATIONS</h2>
      </div>
      <Caroussel />

      <div class="avis">
        <div class="TitleH2">
          <div class="traitGauche"></div>
          <h2>TÉMOIGNAGES</h2>
        </div>

        <div class="carte_avis">
          <p class="avis_paragraphe">
            “ J’ai eu la chance de tester cette paire avant les précommandes et
            j’en ai gardé une très bonne expérience pendant ma séance de
            fitness. Je recommande très fortement ! “
          </p>

          <p class="avis_marque">- Magazine ELLE</p>
        </div>

        <div class="carte_avis">
          <p class="avis_paragraphe">
            “ J’ai eu la chance de tester cette paire avant les précommandes et
            j’en ai gardé une très bonne expérience pendant ma séance de
            fitness. Je recommande très fortement ! “
          </p>

          <p class="avis_marque">- Magazine ELLE</p>
        </div>

        <div class="carte_avis">
          <p class="avis_paragraphe">
            “ J’ai eu la chance de tester cette paire avant les précommandes et
            j’en ai gardé une très bonne expérience pendant ma séance de
            fitness. Je recommande très fortement ! “
          </p>

          <p class="avis_marque">- Magazine ELLE</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Caroussel from "../components/CarrouselInspirations.vue";

export default {
  data() {
    return {
      background: null,
    };
  },
  name: "Home",
  components: {
    Caroussel: Caroussel,
  },
  mounted() {
    console.log("LOG BACKGROUND INIT", this.background);

    axios
      .get("https://mashoo.paulakar.fr/wp-json/wp/v2/pages/5")
      .then((reponse) => {
        this.background = reponse.data;
      });
  },
};
</script>
