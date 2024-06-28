<template>
  <div class="edit-container">
    <h2>Update Your Information</h2>
    <form @submit.prevent="editProfile" class="edit-form">
      <div class="form-group">
        <label>User Name:</label>
        <input type="text" v-model="newUserName" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="newEmail"  />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" v-model="newPassword"  />
      </div>
      <div class="form-group">
        <label>Confirm password:</label>
        <input type="password" v-model="confirmPassword"  />
      </div>
      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
      <button type="submit" class="edit-button">Edit</button>
    </form>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {UserService} from "@/authentication/services/user-service";
import {ProfileService} from "@/authentication/services/Profile-service";
export default {
  name: "profile",
  computed: {
    ...mapState(['profile'])
  },
  data(){
    return{
      newUserName: "",
      newEmail: "",
      newPassword: "",
      confirmPassword: "",
      user: {},
      errorMessage: "",
    }
  },
  async created(){
    this.userService = new UserService();
    this.profileService = new ProfileService();

    try {
      const response = await this.userService.getById(this.profile.id);
      this.user = response.data;

      this.newUserName = this.profile.name;
      this.newEmail = this.user.email;
      this.newPassword = this.user.password;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  },
  methods: {
    async editProfile() {
      if(this.newPassword){
        if(this.newPassword !=this.confirmPassword){
          this.errorMessage ="Passwords doesn't match"
        }else{this.user.password = this.newPassword;}
      }
      if(this.newUserName){
        this.profile.name = this.newUserName;
      }
      if(this.newEmail){
        this.user.email = this.newEmail;
      }
      await this.userService.update(this.user.id, this.user);
      await this.profileService.update(this.profile.id, this.profile);
      this.goToMain();
    },
    goToMain(){
      this.$router.push({ name: 'home' });
    }
  }
}
</script>


<style scoped>
.edit-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4baaf5; /* Celeste */
  padding: 2rem;
  border-radius: 1rem;
  max-width: 1000px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
h2 {
  color: #212121; /* Negro */
  margin-bottom: 1rem;
}
label {
  color: #212121; /* Negro */
  margin-bottom: 0.5rem;
}
input {
  padding: 0.5rem;
  border: 1px solid #212121; /* Negro */
  border-radius: 0.25rem;
  font-size: 1rem;
}
.edit-button:hover {
  background-color: #424242;
}
.edit-form {
  display: flex;
  flex-direction: column;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.edit-button {
  background-color: #212121; /* Negro */
  color: #ffffff; /* Blanco */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>