<template>
    <div class="image-container">
      <img src="/images/fontProfile.png" alt="ProfileImage"  class="center-image"/>
      <p>Name: {{ profile.name }}</p>
      <p>Email: {{ profile.user.email}}</p>
      <div class="read-button">
        <pv-button @click="editProfile" class="p-button p-button-rounded p-button-success">Edit Profile</pv-button>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "profile",
    computed: {
        ...mapState(['profile'])
    },
    methods: {
      editProfile() {
        this.$router.push({ name: 'edit-profile' });
      }
    }
}
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}
.center-image {
  width: 50%;
  height: auto;
}
.read-button {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>