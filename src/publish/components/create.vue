<template>
  <div class="create-container">
    <h2>PUBLISH YOUR BOOK</h2>
    <form @submit.prevent="create" class="create-form">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" v-model="book.title" required />
      </div>
      <div class="form-group">
        <label>Synopsis:</label>
        <input type="text" v-model="book.synopsis" required />
      </div>
      <div class="form-group">
        <label>Publish Date:</label>
        <input type="text" v-model="book.publishedAt" required />
      </div>
      <div class="form-group">
        <label>Language:</label>
        <input type="text" v-model="book.language" required />
      </div>
      <div class="form-group">
        <label>Saga:</label>
        <input type="text" v-model="book.saga" required />
      </div>
      <div class="form-group">
        <label>Photo Url:</label>
        <input type="text" v-model="book.thumbnailUrl" required />
      </div>
      <button type="submit" class="create-button">PUBLISH</button>
    </form>
  </div>
</template>

<script>
import {BookService} from "@/publish/services/book-service";
import {mapState} from "vuex";
import {BookGenreService} from "@/publish/services/book-genre-service";
import {GenreService} from "@/publish/services/genre-service";
export default {
  name: "create",
  computed: { ...mapState(['profile', 'isAuthenticated']) },
  data(){
    return{
      book: {
        title: "",
        synopsis: "",
        publishedAt: "",
        thumbnailUrl : "",
        userProfileId: "",
        saga: "",
        language: ""
      }
    };
  },
  async created() {
    this.bookService = new BookService();
    this.bookGenreService = new BookGenreService();
  },
  methods:{
    async create(){
      this.book.userProfileId = this.profile.id
      await this.bookService.create(this.book);
      this.toPublish();
    },
    toPublish(){
      this.$router.push("/publish");
    }
  }
}
</script>

<style scoped>
.create-container {
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
.genres-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h2 {
  color: #212121; /* Negro */
  margin-bottom: 1rem;
}

.create-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
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

.create-button {
  background-color: #212121; /* Negro */
  color: #ffffff; /* Blanco */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.create-button:hover {
  background-color: #424242;
}
.select-genre {
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 15px;
  font-size: 1rem;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
}
</style>