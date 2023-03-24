<template>
    <div class="container">
        <header class="jumbotron">
            <h3>
                <strong>{{currentUser.username}}</strong> Profile
            </h3>
        </header>
        <p>
            <!-- A supprimer -->
            <strong>Token:</strong>
            {{currentUser.api_token}}
        </p>
        <p>
            <strong>Id:</strong>
            {{currentUser.id}}
        </p>
        <p>
            <strong>Email:</strong>
            {{currentUser.email}}
        </p>
        <strong>Authorities:</strong>
        <ul>
            <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
        </ul>
    </div>
    <div v-if="inscrit" class="container">
        <!-- Cherche ici comment faire avec Tailwind/BootyStrap -->
    </div>
    <div v-else>
        Renseignez vos données personnelles pour pouvoir
        prendre des covoiturages avec les autres ... ! 
        <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Finaliser
          </router-link> 

    </div>
</template>

<script>
    export default {
        name: 'ProfilE',
        data() {
            return {
                inscrit: false
            }
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            currentPerson() {
                return this.$store.state.auth.person;
            }
        },
        mounted() {
            if (!this.currentUser) {
                this.$router.push('/login');
            }
            if (!this.currentPerson) {
                this.inscrit = false;
            } else {
                this.inscrit = true;
            }
        }
    }
;
</script>

<style>

</style>