<template>
  <section class="container min-height">
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
            /><img src="../assets/images/logo-erreur.png" v-if="prenomVide">
            </span>
            <div v-if="prenomVide">
              <p style="color: red">{{ errorVide }}</p>
            </div>
          </div>
          <div class="grid__item">
            <label class="formulaire__label" for="nom">Nom</label>
            <span class="formulaire__input"
              ><input type="text" name="nom"
            />
            <img src="../assets/images/logo-erreur.png" v-if="nomVide">
            </span>
            <div v-if="nomVide">
              <p style="color: red">{{ errorVide }}</p>
            </div>
          </div>
          <div class="grid__item">
            <label class="formulaire__label" for="email">Email</label>
            <span class="formulaire__input"
              ><input type="email" name="email" v-on:blur="TestMail"
            />
              <img src="../assets/images/logo-erreur.png" v-if="errorMail">
            </span>
            <div v-if="errorMail">
              <p style="color: red">{{ errorMessMail }}</p>
            </div>
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
              <img src="../assets/images/logo-erreur.png" v-if="raisonVide">
            </span>
            <div v-if="raisonVide">
              <p style="color: red">{{ errorVide }}</p>
            </div>
          </div>
        </div>

        <div class="formulaire__message">
          <label for="message" class="formulaire__label">Message</label>
          <span class="formulaire__input -message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              placeholder="Ecris un message ..."
            ></textarea>
          </span>
          <div v-if="messageVide">
              <p style="color: red">{{ errorVide }}</p>
            </div>
        </div>
      </div>
    </form>
    <button class="button__form -centrer" id="header__btn" v-on:click="TestFormulaire">Envoyer</button>
  </section>
</template>

<script>
export default{
  data(){
    return{
      errorMail : false,
      errorMessMail : "Veuillez rentrer un email valide",
      prenomVide : false,
      nomVide : false,
      raisonVide : false,
      messageVide : false,
      errorVide : "Ce champs est vide",
    }
  },
  methods:{
    TestMail(){
      let input = document.querySelector('input[type="email"]');
      let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(input.value.match(mailformat)){
        this.errorMail = false;
        
      }
      else{
        this.errorMail = true;
      }
    },
    TestFormulaire(){
      let vue = this;
      let formulaire = document.querySelectorAll('.formulaire input, select, textarea');
      formulaire.forEach(function(element, i=0){
        
        if(element.value == "")
        {
          console.log(element);
          switch (i){
            case 0 :
              vue.prenomVide = true;
              break;
            case 1 :
              vue.nomVide = true;
              break;
            case 2 :
              vue.errorMail = true;
              break;
            case 3 :
              vue.raisonVide = true;
              break;
            case 4 :
              vue.messageVide = true;
              break;
          }
        }
        else{
          switch (i){
            case 0 :
              vue.prenomVide = false;
              break;
            case 1 :
              vue.nomVide = false;
              break;
            case 2 :
              vue.errorMail = false;
              break;
            case 3 :
              vue.raisonVide = false;
              break;
            case 4 :
              vue.messageVide = false;
              break;
          }
        }
        i++;
        
      })
    },
    EnvoieMail(){
      console.log('Le mail a été envoyé');
    }
  }
}
</script>



