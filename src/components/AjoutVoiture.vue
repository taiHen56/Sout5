<template>
    <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
          <div v-if="!submitted" class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">

            <h1  class="text-2xl font-bold mb-8">Inscription</h1> 
              <Form id="form" @submit="insertVoiture" :validation-schema="schema" v-slot="{ errors }">
          
                <!-- Select Options
            
            -->
              <div class="relative z-0 w-full mb-5">
                <Field
                as="select"
                  name="Field"
                  value=""
                  v-model="selectedOption"
                  :class="{ 'is-invalid': errors.voiture }"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                  <option value="" selected disabled hidden></option>
                  <option v-for="(Voiture, index) in Voitures" :key="index" :value="{ model: Voiture.name, brand: Voiture.brand }">
                    {{ Voiture.name }} {{ Voiture.brand }}
                  </option>
             
                </Field>
                <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Selectionnez une voiture</label>
                <span class="text-sm text-red-600" id="error">{{ errors.voiture }}</span>
              </div>

              <!-- Matricule   -->
                      <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="matricule"
                          placeholder=" "
                          v-model="person.plaque"
                          :class="{ 'is-invalid': errors.plaque }"
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez l'immatriculation</label>
                        <span class="text-sm text-red-600  invalid-feedback" >{{ errors.plaque }} </span>
                      </div>
                <!-- Color   -->
                      <div class="relative z-0 w-full mb-5">
                        <Field
                          type="text"
                          name="color"
                          placeholder=" "
                          v-model="person.color"
                          :class="{ 'is-invalid': errors.color }"
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="color" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez Couleur</label>
                        <span class="text-sm text-red-600  invalid-feedback" >{{ errors.color }} </span>
                      </div>
                <!-- Places   -->
                      <div class="relative z-0 w-full mb-5">
                        <Field
                          type="number"
                          min="0" max="6"
                          name="places"
                          placeholder=" "
                          v-model.number="person.places"
                          :class="{ 'is-invalid': errors.places }"
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label for="places" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez places</label>
                        <span class="text-sm text-red-600  invalid-feedback" >{{ errors.places }} </span>
                      </div>

              <button
                id="button"
                type="button"
                class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                 @click="insertVoiture"
                >
                Inscription

              </button>
            
          
            </Form> 
</div>
            <div v-else>
            <div v-if="reussite">
                <h4>Ajout effectué avec succes!</h4>
                   <router-link to="/profile">
                    <button
                        id="button"
                        type="button"
                        class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
             
                        >
                    Revenir dans profil</button></router-link> 
            </div>
            <div v-else>
            <h4>Erreur, cette voiture existe déjà ...</h4>
        <router-link to="/ajoutVoiture">
                <button
                    id="button"
                    type="button"
                    class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
             
                    >
                Revenir dans Modifier</button></router-link> 
            </div>
                
            </div>
            
          </div>
          
         
         
</template>

<script>
import MarqueDataService from "../services/MarqueDataService";
import VoitureDataService from "../services/VoitureDataService";
import PersonneDataService from "../services/PersonneDataService";
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default{
name: 'AjoutVoiture',
components: {
    Form,
    Field,
}, 
data(){
    const schema = Yup.object().shape({
            plaque: Yup.string()
                .required('plaque is required'),
            voiture: Yup.string()
                .required('voiture is required'),
            color: Yup.string()
                .required('couleur is required'),
            places: Yup.number()
                .required('couleur is required'),
        });

    return {
        schema,
        Voitures: [],
        selectedOption: null,
        submitted: false,
        reussite: false,
        person: {
                
               
                possedeVoiture: null,
                plaque: "",
                color: "",
                places: 0,

            }
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
    methods: {
        voituresCollection() {
            MarqueDataService.getAll()
                .then(response => {
                    this.Voitures = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        insertVoiture(){
            var data = {
                params: {
                    id_pers: this.currentPerson.id,
                    matricule: this.person.plaque,
                    color: this.person.color,
                    places: this.person.places,
                    model: this.selectedOption.model,
                    brand: this.selectedOption.brand
                }

            };
            VoitureDataService.create(data)
            .then(response => {
                if(response.data){
                    this.submitted = true;
                    this.reussite = true,
                    PersonneDataService.getVoiture(this.currentPerson.id)
                    .then(personResponse => {
                        this.currentPerson.cars = personResponse.data
                    })
                }
            })
        }
    },
    
    mounted() {
        this.voituresCollection();
    }
}
</script>

<style>
.-z-1 {
    z-index: -1;
}

.origin-0 {
    transform-origin: 0%;
    left: 0px;
}

input:focus~label,
input:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;

}

input:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    left: 0px;
}
</style>