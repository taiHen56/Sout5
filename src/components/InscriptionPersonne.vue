<template>
    <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 v-if="currentPerson" class="text-2xl font-bold mb-8">Mise a jour de vos données personnelles</h1>
        <h1 v-else class="text-2xl font-bold mb-8">Inscription</h1>
        <form id="form" novalidate>
            <!-- Nom  -->
          <div class="relative z-0 w-full mb-5">

            <input
              type="text"
              name="name"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez Nom</label>
            <span class="text-sm text-red-600 hidden" id="error">Le nom est requis</span>
          </div>
          <!-- Nom  -->
              <div class="relative z-0 w-full mb-5">

                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez Prenom</label>
                <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
              </div>
        <!-- Email   -->
          <div class="relative z-0 w-full mb-5">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez email</label>
            <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
          </div>
          <!-- Telephone   -->
              <div class="relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez télephone (facultatif)</label>
              </div>
          <div v-if="currentPerson">   
    <!-- Radio Options  -->
          <fieldset class="relative z-0 w-full p-px mb-5">
            <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Avez vous une voiture ?</legend>
            <div class="block pt-3 pb-2 space-x-4">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="true"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Oui
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="false"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Non
              </label>
            </div>
            <span class="text-sm text-red-600 hidden" id="error">Repondez a cette question s'il vous plait</span>
          </fieldset>
          
            <!-- Select Options  -->
          <div class="relative z-0 w-full mb-5">
            <select
              name="select"
              value=""
              onclick="this.setAttribute('value', this.value);"
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            >
              <option value="" selected disabled hidden></option>
              <option value="1" v-for="(Voiture, index) in Voitures" :key="index">
                <span name="model">{{Voiture.name}}</span>
                <span name="brand">{{ Voiture.brand }} </span>
              </option>
             
            </select>
            <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Selectionnez une voiture</label>
            <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
          </div>

          <!-- Matricule   -->
                  <div class="relative z-0 w-full mb-5">
                    <input
                      type="text"
                      name="matricule"
                      placeholder=" "
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez l'immatriculation</label>
                  </div>
            <!-- Color   -->
                  <div class="relative z-0 w-full mb-5">
                    <input
                      type="text"
                      name="color"
                      placeholder=" "
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez Couleur</label>
                  </div>
            <!-- Places   -->
                  <div class="relative z-0 w-full mb-5">
                    <input
                      type="number"
                      min="0" max="6"
                      name="places"
                      placeholder=" "
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                    <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Entrez places</label>
                  </div>

          <button
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          >
            Inscription

          </button></div>
        </form>
      </div>
    </div>
</template>

<script>
import MarqueDataService from "../services/MarqueDataService";
export default {
name: 'ProfilE',
    data() {
    return {
        passwordVisible: false,
        maskedPassword: '',
        Voitures: [],
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