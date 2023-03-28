<template>
    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card h-auto w-full mx-auto" />
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ currentUser.username }}</h1>

                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <div v-if="currentPerson">
                            <li class="flex items-center py-3">
                                <span>Status</span>
                                <span class="ml-auto">
                                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                                </span>
                            </li>
                            <li class="flex items-center py-3">
                                <span>Vous êtes</span>
                                <span v-if="currentPerson.cars && currentPerson.cars.length" class="ml-auto">Conducteur
                                    !</span>
                                <span v-else class="ml-auto">Passager seulement</span>
                            </li>
                        </div>
                        <div v-else>
                            <li class="flex items-center py-3">
                                <span>Status</span>

                                <span class="ml-auto">
                                    <span class="bg-red-500 py-1 px-2 rounded text-white text-sm">Désactivé</span>
                                </span>

                            </li>
                        </div>

                    </ul>

                </div>
            </div>
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Vos informations</span>
                    </div>
                    <div class="text-gray-700">
                        <div v-if="currentPerson" class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Nom</div>
                                <div class="px-4 py-2">{{ currentPerson.nom }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Prénom</div>
                                <div class="px-4 py-2">{{ currentPerson.prenom }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Téléphone</div>
                                <div v-if="currentPerson.tel === null"
                                    class="px-4 py-2 italic text-gray-500 hover:text-gray-600">Pas renseigné...</div>
                                <div v-else class="px-4 py-2">{{ currentPerson.tel }}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:{{ currentPerson.email }}">{{ currentPerson.email
                                    }}</a>
                                </div>
                            </div>
                        </div>
                        <div v-else class="grid md:grid-cols-1 text-sm">
                            <div class="grid grid-cols-1">
                                <div class="px-4 py-2 font-semibold">
                                    Pour pouvoir prendre des covoiturages, terminez votre inscription...
                                </div>

                            </div>
                        </div>
                    </div>
                    <router-link to="/inscriptPersonne">
                    <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Modifier</button></router-link> 
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div v-if="currentPerson" class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-1">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Vos voitures</span>
                            </div>
                            <ul v-if="currentPerson.cars && currentPerson.cars.length" class="list-inside space-y-2">
                                <div v-for="(carList, index) in currentPerson.cars" :key="index">
                                    <div v-for="car in carList" :key="car.id">
                                        <li>
                                            <div class="text-teal-600">{{ car.marque }} {{ car.modele }} </div>
                                            <div class="text-gray-500 text-xs">Matricule: {{ car.matricule }}</div>
                                            <div class="text-gray-500 text-xs">Couleur: {{ car.color }}</div>
                                            <div class="text-gray-500 text-xs">Places: {{ car.places }}</div>
                                        </li>
                                    </div>
                                </div>
                                
                            </ul>
                            <ul v-else class="list-inside space-y-2">
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Rien à afficher ici pour
                                    l'instant ... </p>
                            </ul>
                            <router-link to="/ajoutVoiture"><button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"> Ajouter une voiture...</button></router-link>
                            
                        </div>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// const API_URL = 'http://127.0.0.1:8000/';
export default {
    name: 'ProfilE',
    data() {
        return {
            passwordVisible: false,
            maskedPassword: '',
            inscrit: false
        }
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
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
        // this.getCurrentPerson();
    },
    methods: {
        // async getCurrentPerson() {
        //     const personResponse = await axios.get(API_URL + 'liste/personne/user/' + parseInt(this.user.id_user), {
        //         headers: {
        //             token: this.user.token
        //         }
        //     });
        //     if (personResponse.data.nom) {
        //         // User has a related Person entity in the database
        //         localStorage.setItem('person', JSON.stringify(personResponse.data));
        //         this.person = personResponse.data;
        //         this.inscrit = true;
        //     } else {
        //         localStorage.removeItem('person');
        //         this.person = null;
        //         this.inscrit = false;
        //     }
        // }
    }
};
</script>

<style>
:root {
    --main-color: #4a76a8;
}

.bg-main-color {
    background-color: var(--main-color);
}

.text-main-color {
    color: var(--main-color);
}

.border-main-color {
    border-color: var(--main-color);
}
</style>