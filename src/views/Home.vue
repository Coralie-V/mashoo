<template>
  <div class="Accueil min-height">
    <header
      v-bind:style="{ backgroundImage: 'url(' + background.acf.banner + ')' }"
      v-if="background"
    >
      <div class="banner">
        <div class="header_chapo">
          <h1> {{ background.acf.titre }}</h1>
          <p>{{ background.acf['sous-titre'] }}</p>
          <p id="price">{{ background.acf.prix }}</p>
        </div>
        <div class="header__shoe">
          <img
            class="header__img"
            v-bind:src="background.acf.logo"
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
      <div class="histoire_marque" v-if="histoire">
        <div class="TitleH2">
          <div class="traitGauche"></div>
          <h2>Histoire de la marque</h2>
        </div>

        <div class="paragraph">
          <img v-bind:src="histoire.image_1.url" v-bind:alt="histoire.image_1.name" />

          <p>
            {{histoire.paragraphe_1}}
          </p>
        </div>

        <div class="paragraph">
          <p>
            {{histoire.paragraphe_2}}
          </p>

          <img
            class="histoire_chaussure_II"
            v-bind:src="histoire.image_2.url" v-bind:alt="histoire.image_2.name"
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

        <div class="carte_avis" v-if="tab_temoin">
          <p class="avis_paragraphe">
            “ {{ tab_temoin[0].avis.le_temoignage }} “
          </p>

          <p class="avis_marque">- {{ tab_temoin[0].avis.le_magazine }}</p>
        </div>

        <div class="carte_avis">
          <p class="avis_paragraphe">
            “ {{ tab_temoin[1].avis.le_temoignage }} “
          </p>

          <p class="avis_marque">- {{ tab_temoin[1].avis.le_magazine }}</p>
        </div>

        <div class="carte_avis">
          <p class="avis_paragraphe">
            “ {{ tab_temoin[2].avis.le_temoignage }} “
          </p>

          <p class="avis_marque">- {{ tab_temoin[2].avis.le_magazine }}</p>
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
      tab_temoin: null,
      histoire:null,
      
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
      .then((response) => {
        // background
        this.background = response.data;
        console.log("on test : ", this.background.acf.logo);
        // Histoire de la marque
        this.histoire = response.data.acf;
        // Les avis
        this.tab_temoin = response.data.acf.temoignages;
        
        
      });
  },
};
</script>
