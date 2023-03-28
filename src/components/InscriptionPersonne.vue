<template>
    <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div v-if="!submitted" class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <div v-if="currentPerson">
        <h1 class="text-2xl font-bold mb-8">Mise a jour de vos données personnelles</h1>
        <Form id="form"  :validation-schema="schema">
                <div class="relative z-0 w-full mb-5">
                <!-- Nom -->
                <Field
                  type="text"
                  name="name"
                  placeholder=""
                  required
                    v-model="person.nom"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                /> 
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-700">{{ currentPerson ? currentPerson.nom : "Entrez nom" }}</label>
                <span class="text-sm text-red-600 hidden" id="error">Le nom est requis</span>
              </div>
              <!-- Prenom  -->
                  <div class="relative z-0 w-full mb-5">

                    <Field
                      type="text"
                      name="name"
                      placeholder=" "
                      required
                      v-model="person.prenom"
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{{ currentPerson ? currentPerson.prenom : "Entrez Prenom" }}</label>
                    <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
                  </div>
            <!-- Email   -->
              <div class="relative z-0 w-full mb-5">
                <Field
                      type="text"
                      name="email"
              
                     
                      v-model="person.email"
                      placeholder=" "
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{{ currentPerson ? currentPerson.email : "Entrez email" }}</label>
              </div>
              <!-- Telephone   -->
                  <div class="relative z-0 w-full mb-5">
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      v-model="person.tel"
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">{{ currentPerson.tel ? currentPerson.tel : "Entrez télephone (facultatif)" }}</label>
                  </div>
                  <button
                    id="button"
                    type="button"
                    class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                     @click="updatePersonne"
                    >
                    Mise à jour!

                  </button>
        </Form>
        </div>
        <div v-else>
           <h1  class="text-2xl font-bold mb-8">Inscription</h1> 
          <Form id="form" @submit="insertPersonne" :validation-schema="schema" v-slot="{ errors }">
            <!-- Nom  -->
          <div class="relative z-0 w-full mb-5">

            <Field
              type="text"
              name="nom"
              placeholder=""
              
              
                v-model="person.nom"
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-700">Entrez nom</label>
        
          </div>
          <!-- Prenom  -->
              <div class="relative z-0 w-full mb-5">

                <Field
                  type="text"
                  name="prenom"
                  placeholder=" "
                  
              
                  v-model="person.prenom"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="prenom" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez Prenom</label>
           
              </div>
        <!-- Email   -->
          <div class="relative z-0 w-full mb-5">
            <Field
                  type="text"
                  name="email"
              
                  :class="{ 'is-invalid': errors.email }"
                  v-model="person.email"
                  placeholder=" "
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez email</label>
                <span class="text-sm text-red-600  invalid-feedback" >{{ errors.email }} </span>
          </div>
          <!-- Telephone   -->
              <div class="relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  v-model="person.tel"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez télephone (facultatif)</label>
              </div>
          <div>   
    <!-- Radio Options  -->
          <fieldset class="relative z-0 w-full p-px mb-5">
            <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Avez vous une voiture ?</legend>
            <div class="block pt-3 pb-2 space-x-4">
              <label>
                <Field
                  type="radio"
                  name="radio"
                  value="true"
                  v-model="person.possedeVoiture"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Oui
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  value="false"
                  v-model="person.possedeVoiture"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Non
              </label>
            </div>
            <span class="text-sm text-red-600" id="error">Repondez a cette question s'il vous plait</span>
          </fieldset>
          
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
                {{Voiture.name}} {{ Voiture.brand }}
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
             @click="insertPersonne"
            >
            Inscription

          </button></div>
          
        </Form> 
        </div>
      </div>
      <div v-else>
        <div v-if="reussite">
            <h4>Ajout effectué avec succes!</h4>
                <button class="btn btn-success" @click="newchaussette">Ajouter une autre ...</button>
        </div>
        <div v-else>
        <h4>Erreur, cet email existe déjà ...</h4>
    <router-link to="/inscriptPersonne">
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
import PersonneDataService from "../services/PersonneDataService";
// eslint-disable-next-line
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';



export default {
name: 'InscriptPers',
    components: {
        Form,
        Field,
    },
    data() {
        const schema = Yup.object().shape({
                nom: Yup.string()
                    .required('nom is required'),
                prenom: Yup.string()
                    .required('prenom is required'),
                email: Yup.string()
                    .required('Email requis')
                    .email('Email invalide'),
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
        passwordVisible: false,
        maskedPassword: '',
        Voitures: [],
        selectedOption: null,
        submitted: false,
        reussite: false,
        errors: {
                email: "",
                password: "",
            },
        person: {
            nom: "",
            prenom: "",
            email: "",
            tel: null,
            possedeVoiture: null,
            plaque:"",
            color:"",
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
            insertPersonne() {
                console.log("1")
                console.log(this.person.possedeVoiture == true)
                console.log(this.selectedOption == null)
            if(this.person.possedeVoiture===true && this.selectedOption ==null){
                alert('voiture is required')
                console.log("2")
            }else {
                console.log("3")
                console.log(this.person.prenom)

            var data = {
                params: {
                    nom: this.person.nom,
                    prenom: this.person.prenom,
                    email: this.person.email,
                    tel: this.person.tel,
                    possedeVoiture: this.person.possedeVoiture,
                    matricule: this.person.plaque,
                    color: this.person.color,
                    places: this.person.places,
                    model: this.selectedOption.model,
                    brand: this.selectedOption.brand
                }
                
            };
            console.log("4")
            PersonneDataService.create(data)
                .then(response => {
                    if (response.data.id) {
                        console.log("5")
                    this.person.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                    this.reussite = true,
                    PersonneDataService.get(response.data.id).then(
                        personResponse => {
                            console.log("6")
                            localStorage.setItem('person', JSON.stringify(personResponse.data));
                        }
                    )
                    }
                })
                .catch(e => {
                    console.log(e);
                });
            }

            },
            updatePersonne(){
            var data = {
            params: {
            nom: this.person.nom,
            prenom: this.person.prenom,
            email: this.person.email,
            tel: this.person.tel,
            
            }}
            PersonneDataService.update(this.currentPerson.id, data).then(response => {
                if (response.data) {
                    console.log("5")
                    this.person.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                    this.reussite = true}
                });
            },
            validateEmail(value) {
                // eslint-disable-next-line
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (regex.test(value)) {
                this.msg['email'] = '';
                this.disabled = [false, this.disabled[1]]
            } else {
                this.msg['email'] = 'Invalid Email Address';
                this.disabled = [true, this.disabled[1]]
            }

            },
    
    },
    mounted() {
        this.voituresCollection();
    }
};

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