<template>
    <div class="image-container">
        <img src="/images/fontProfile.png" alt="ProfileImage"  class="center-image"/>
        <p>Name: {{ profile.name }}</p>
        <p>Email: {{ profile.user.email}}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "profile",
    computed: {
        ...mapState(['profile'])
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
</style>