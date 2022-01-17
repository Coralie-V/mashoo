<template>
  <section class="container">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Connexion</h1>
      <div class="trait_titre_h1"></div>
    </div>
    <form>
      <div class="formulaire">
        <label class="formulaire__label" for="email">Email</label>
        <span class="formulaire__input"
          ><input type="email" name="email"
        /></span>
        <label class="formulaire__label" for="mdp">Mot de passe</label>
        <span class="formulaire__input"
          ><input type="password" name="mot de passe"
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
    </form>
    <button class="button__form -centrer"><span>Se connecter</span></button>
    <button class="-orange -centrer">
      <span
        ><img src="images/logos_google-icon.png" />
        <p>Connexion avec Google</p></span
      >
    </button>
  </section>
</template>
