<template>
  <section class="container">
    <div id="titre_page">
      <div class="trait_titre_h1"></div>
      <h1 id="titre_h1">Contact</h1>
      <div class="trait_titre_h1"></div>
    </div>
    <form>
      <div class="formulaire -contact">
        <div class="formulaire__grid">
          <div class="grid__item">
            <label class="formulaire__label" for="prenom">Prénom</label>
            <span class="formulaire__input"
              ><input type="text" name="prenom"
            /></span>
          </div>
          <div class="grid__item">
            <label class="formulaire__label" for="nom">Nom</label>
            <span class="formulaire__input"
              ><input type="text" name="nom"
            /></span>
          </div>
          <div class="grid__item">
            <label class="formulaire__label" for="email">Email</label>
            <span class="formulaire__input"
              ><input type="email" name="email"
            /></span>
          </div>
          <div class="grid__item">
            <label for="sujet" class="formulaire__label">Sujet</label>
            <span class="formulaire__input">
              <select name="sujet">
                <option value=""></option>
                <option value="prob_comm">Problème avec une commande</option>
                <option value="prob_tech">Problème technique</option>
                <option value="info">Demande d'information</option>
                <option value="autre">Autre</option>
              </select>
            </span>
          </div>
        </div>

        <div class="formulaire__message">
          <label for="message" class="formulaire__label">Message</label>
          <span class="formulaire__input -message">
            <textarea name="message" id="" cols="30" rows="7" placeholder="Ecris un message ..."></textarea
            >
          </span>
        </div>
      </div>
    </form>
    <button class="button__form -centrer" id="header__btn">Envoyer</button>
  </section>
</template>


