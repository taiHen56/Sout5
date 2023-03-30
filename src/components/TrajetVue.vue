<template>
    <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
        <div v-if="currentTrajet" class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <h1  class="text-2xl font-bold mb-8">Détails du trajet</h1> 
            <Form id="form" >
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="Conducteur"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Conducteur {{ currentTrajet.conducteurNom }} {{ currentTrajet.conducteurPrenom }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="villeDepart"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Depart :{{ currentTrajet.villeDepart }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="villeArrivee"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Arrivée :{{ currentTrajet.villeArrivee }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="date"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date {{ currentTrajet.date }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="heureDepart"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Heure Départ {{ currentTrajet.heureDepart }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="heureArrivee"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Heure Arrivée {{ currentTrajet.heureArrivee }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="Kms"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Kilomètres {{ currentTrajet.Kms }}</label>
                       
                </div>
                <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="places"
                          readonly
                          placeholder=" "
                          
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Places {{ currentTrajet.places }}</label>
                       
                </div>
                <div v-if="currentPerson.id == currentTrajet.id_pers">
                  <button
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
             @click="insertPersonne"
            >
            Annuler

                </button>

                </div>
                  <div v-else>
                    <button
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
             @click="insertPersonne"
            >
            Inscription

          </button></div>
                  
            </Form>
        </div>
    </div>

</template>


<script>
import { Form, Field } from 'vee-validate';
import TrajetDataService from "../services/TrajetDataService";

export default {
    components: {
        Form,
        Field,
    },
  data() {
    return {
    
      currentTrajet: null
    }
  }, methods: {
    listeTrajets(id) {
      TrajetDataService.getTrajet(id)
        .then(response => {
          this.currentTrajet = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e.data.error);
        });
    }
  },computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        currentPerson() {
            console.log(localStorage.getItem('person'))

            return JSON.parse(localStorage.getItem('person'));
        }
    },
  mounted() {
        this.listeTrajets (this.$route.params.trajet);
    }
}
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>