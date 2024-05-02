<template>
    <div class="w-full">
        <div class="toolbar-conteiner">
            <pv-menubar class="sticky bg-blue-500">
                <template #start>
                    <pv-button label="Menu" icon="pi pi-bars" @click="toggleSidebar"/>
                    <side-menu v-model:visible="sidebarVisible"></side-menu>
                </template>
                <template #end>
                    <div class="profile-conteiner">
                        <router-link to="/home">
                            <img class="home-image" src="/images/Logo.png" alt="Home"/>
                        </router-link>
                        <div @mouseover="showLogout = true" @mouseleave="showLogout = false">
                            <router-link to="/profile">
                                <img class="profile-image" :src="profile.urlPhoto || '/images/offLogin.png'" alt="Profile"/>
                            </router-link>
                            <button class="button-logout" v-show="showLogout && isAuthenticated" @click="logout">Log out</button>
                        </div>
                    </div>
                </template>
            </pv-menubar>
        </div>
        <RouterView/>
        <footer-content-component></footer-content-component>
    </div>
</template>

<script>
import MainContentComponent from "./publish/components/main-content.component.vue";
import FooterContentComponent from "./shared/components/footer-content.component.vue";
import SideMenu from "./shared/components/side-menu.component.vue";
import { mapState } from 'vuex'
export default {
    name: 'App',
    components: {FooterContentComponent, MainContentComponent, SideMenu},
    computed: {...mapState(['profile','isAuthenticated'])},
    data() {
        return {
            sidebarVisible: false,
            showLogout: false
        };
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        },
        logout() {
            this.$store.commit('setUser', {});
            this.$store.commit('setIsAuthenticated', false);
            // Redirige al usuario a la página de inicio de sesión
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.home-image {
    max-height: 70px;
    margin: 0 10px;
}
.profile-image {
    border-radius: 50%;
    max-height: 70px;
    margin: 0 10px;
}
.toolbar-conteiner {
    position: relative;
}
.profile-conteiner {
    display: flex;
    align-items: center;
    position: relative;
}

.profile-conteiner > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-logout {
    position: absolute;
    top: 100%;
    left: 75%;
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    white-space: nowrap;
}
</style>
