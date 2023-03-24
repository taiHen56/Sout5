<template>
    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="../images/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
                            alt="image de profil">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{{ currentUser.username }}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Mot de passe :
                        <div>
                            <div class="password" v-html="passwordVisible ? currentUser.password : maskedPassword">
                            </div>
                            <!-- Peut être faudra mettre le tout dans une div encore -->
                            <button @click="togglePasswordVisibility">{{ passwordVisible ? 'Hide' : 'Show' }}
                            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></button>
                        </div>

                    </h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        },
        methods: {
            togglePasswordVisibility() {
                this.passwordVisible = !this.passwordVisible;
                if (!this.passwordVisible) {
                    this.maskedPassword = this.password.replace(/./g, '*');
                } else {
                    this.maskedPassword = '';
                }
            }
        }
    };
</script>

<style>

</style>