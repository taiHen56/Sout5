<template>
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
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-700">Entrez ville de départ</label>
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
                    class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                     @click="updatePersonne"
                    >
                    Mise à jour!

                  </button>
        </Form>
</template>

<script>
import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
export default {
    

    name: 'AjoutTrajet',
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
            trajet: {
            villeD: "",
            villeA: "",
            date: null,
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

}
</script>

<style>

</style>