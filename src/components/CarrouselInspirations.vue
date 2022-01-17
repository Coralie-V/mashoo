<template>
  <div class="center">
    <div class="carousel-wrapper">
      <!-- abstract radio buttons for slides -->
      <input id="slide1" type="radio" name="controls" checked="checked" />
      <input id="slide2" type="radio" name="controls" />
      <input id="slide3" type="radio" name="controls" />
      <input id="slide4" type="radio" name="controls" />
      <input id="slide5" type="radio" name="controls" />

      <label for="slide1" class="right-arrow"> > </label>
      <label for="slide2" class="right-arrow"> > </label>
      <label for="slide3" class="right-arrow"> > </label>
      <label for="slide4" class="right-arrow"> > </label>
      <label for="slide5" class="right-arrow"> > </label>

      <div class="carousel">
        <ul>
          <li>
            <img src="@/assets/images/chaussure.png" />
          </li>
          <li>
            <img src="@/assets/images/chaussure.png" />
          </li>
          <li>
            <img src="@/assets/images/chaussure.png" />
          </li>
          <li>
            <img src="@/assets/images/chaussure.png" />
          </li>
          <li>
            <img src="@/assets/images/chaussure.png" />
          </li>
        </ul>
      </div>
    </div>
    <button class="button__form" id="header__btn">Inspirations</button>
  </div>
</template>
