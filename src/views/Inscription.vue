<template>
  <section class="container">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Inscription</h1>
      <div class="trait_titre_h1"></div>
    </div>
    <form>
      <div class="formulaire">
        <label class="formulaire__label" for="prenom">Prénom</label>
        <span class="formulaire__input"
          ><input type="text" name="prenom"
        /></span>
        <label class="formulaire__label" for="nom">Nom</label>
        <span class="formulaire__input"><input type="text" name="nom" /></span>
        <label class="formulaire__label" for="email">Email</label>
        <span class="formulaire__input"
          ><input type="email" name="email"
        /></span>
        <label class="formulaire__label" for="naissance"
          >Date de naissance</label
        >
        <span class="formulaire__input"
          ><input type="text" name="naissance"
        /></span>
        <label class="formulaire__label" for="username"
          >Nom d'utilisateur</label
        >
        <span class="formulaire__input"
          ><input type="text" name="username"
        /></span>
        <label class="formulaire__label" for="mdp">Mot de passe</label>
        <span class="formulaire__input"
          ><input type="password" name="mot de passe"
        /></span>
        <label class="formulaire__label" for="ConfirmMdp"
          >Confirmation du mot de passe</label
        >
        <span class="formulaire__input"
          ><input type="password" name="ConfirmMdp"
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
    </form>
    <button class="button__form -centrer"><span>S'inscrire</span></button>
  </section>
</template>
