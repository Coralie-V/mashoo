<template>
  <div id="nav">
    <nav class="nav">
      <input type="checkbox" class="nav__btn" id="nav__btn" />
      <label for="nav__btn" class="nav__icon">
        <span class="nav__icon__line"></span>
        <router-link to="/">
          <img id="logo" src="@/assets/images/logo.svg" alt="mashoo" />
        </router-link>
      </label>

      <ul class="nav__group">
        <li class="nav__list">
          <router-link to="/">Accueil</router-link>
        </li>
        <li class="nav__list">
          <router-link to="/personnalisation">Personnalisation</router-link>
        </li>
        <li class="nav__list">
          <router-link to="/inspirations">Inspirations</router-link>
        </li>
        <li class="nav__list --login" v-if="!isUserLogged">
          <router-link id="--login" to="/connexion">Connexion</router-link>
        </li>
        <li class="nav__list --profil" v-if="isUserLogged">
          <router-link id="--profil" to="/connexion">Profil</router-link>
        </li>
        <ul> 
            <li><router-link to="/profil">Mon Profil</router-link></li>
        </ul>
      </ul>
    </nav>
  </div>
</template>

<script>

export default{
 computed:{
   isUserLogged (){
     return this.$store.state.user.authToken ? true : false
   }
 }
 }
</script>

