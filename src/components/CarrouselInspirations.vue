<template>
  <div class="carousel_component">
    <div class="center">
      <div class="carousel-wrapper">
        <!-- abstract radio buttons for slides -->
        <input id="slide1" type="radio" name="controls" checked="checked" />
        <input id="slide2" type="radio" name="controls" />
        <input id="slide3" type="radio" name="controls" />
        <input id="slide4" type="radio" name="controls" />
        <input id="slide5" type="radio" name="controls" />

        <!-- arrows -->
        <label for="slide1" class="left-arrow"> &#60; </label>
        <label for="slide2" class="left-arrow"> &#60; </label>
        <label for="slide3" class="left-arrow"> &#60; </label>
        <label for="slide4" class="left-arrow"> &#60; </label>
        <label for="slide5" class="left-arrow"> &#60; </label>
        <label for="slide1" class="right-arrow"> > </label>
        <label for="slide2" class="right-arrow"> > </label>
        <label for="slide3" class="right-arrow"> > </label>
        <label for="slide4" class="right-arrow"> > </label>
        <label for="slide5" class="right-arrow"> > </label>

        <div class="carousel">
          <ul>
            <li
              class="shoe_list"
              v-for="carrousel in carrousels.slice(0, 5)"
              :key="carrousel.url"
            >
              <img class="shoe_img" :src="carrousel.acf.image_URL" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button
      onclick="window.location.href='inspirations'"
      class="button__form"
      id="header__btn"
    >
      Voir plus d'inspirations
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      carrousels: null,
    };
  },
  name: "Carrousel",

  mounted() {
    axios
      .get("https://mashoo.paulakar.fr/wp-json/wp/v2/shoes")
      .then((response) => {
        // Liste des chaussures

        console.log((this.carrousels = response.data));
      });
  },
};
</script>
