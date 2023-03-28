<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Rechercher par ville de depart" v-model="depart" />
                <input type="text" class="form-control" placeholder="Rechercher par ville d'arrivée" v-model="arrivee" />
                <input
                type="text"
                name="date"
                placeholder="Date de depart "
                v-model="date"
                onclick="this.setAttribute('type', 'date');"
                class="form-control"
              />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchtitre">
                        Rechercher
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Liste de Trajets </h4>
            <ul class="list-group">
                <div v-for="(TrajetListe, index) in Trajets" :key="index" >
                <li class="list-group-item" :class="{ active: index == currentIndex,  'text-red-600': Trajet.id_pers === currentPerson.id, 'text-gray-500': Trajet.id_pers === currentPerson.id   }"
                    v-for="Trajet in TrajetListe" :key="Trajet.id" @click="setActiveTrajet(Trajet, index)">
                    {{ Trajet.villeDepart }} ==> {{ Trajet.villeArrivee }} à  {{ Trajet.date }}
                </li>
                </div>
                
            </ul>

            <button class="m-3 btn btn-sm btn-danger" @click="removeAllTrajets">
                Supprimer tout
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentTrajet">

                <h4>Trajet {{ currentTrajet.villeDepart }} ==> {{ currentTrajet.villeArrivee }}  </h4>
                <div>
                    <label><strong>Conducteur:</strong></label> {{ currentTrajet.conducteurNom }} {{ currentTrajet.conducteurPrenom }}
                </div>
                <div>
                    <label><strong>Places:</strong></label> {{ currentTrajet.places }}
                </div>
            
                <router-link :to="'/Trajet/' + currentTrajet" class="badge badge-warning"><button class="btn"
                        style="background-color:seagreen;">PLus de détails...</button> </router-link>
            </div>
            <div v-else>
                <br />
                <p>Cliquez sur une Trajet...</p>
            </div>
        </div>
    </div>
</template>

<script>
import TrajetDataService from "../services/TrajetDataService";

export default{
    name: "Trajet-liste",
    data(){
        return {
            Trajets: [],
            currentTrajet: null,
            currentIndex:-1,
        }
    }
    ,
    methods: {
        listeTrajets() {
            TrajetDataService.getAll()
            .then(response => {
                    this.Trajets = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e.data.error);
                });
        }
        ,
        refreshList() {
            this.listeTrajets();
            this.currentTrajet = null;
            this.currentIndex = -1;
        },
        setActiveTrajet(Trajet, index) {
            this.currentTrajet = Trajet;
            this.currentIndex = Trajet ? index : -1;
        },
        removeAllTrajets() {
            TrajetDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },
        searchtitre() {
            console.log(this.depart)
            console.log(this.arrivee)
            console.log(this.date)
            var data={
                params : {
                    ville_depart : this.depart,
                    ville_arrivee : this.arrivee,
                    date: this.date
                }

            }
            TrajetDataService.get(data)
                .then(response => {
                    this.Trajets = response.data;
                    this.setActiveTrajet(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }

    }
    ,
    mounted() {
        this.listeTrajets();
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        currentPerson() {
            console.log(localStorage.getItem('person'))

            return JSON.parse(localStorage.getItem('person'));
        }
    },
}

</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>