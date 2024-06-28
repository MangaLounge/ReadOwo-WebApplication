<template>
  <div class="write-container">
    <h1 class="text-center">Edit Book Content</h1>
    <textarea v-model="book.fullText" class="text-editor"></textarea>
    <div class="button-group">
      <pv-button
          @click="saveContent"
          class="p-button p-button-rounded p-button-success"
      >
        SAVE
      </pv-button>
      <pv-button
          @click="cancelEdit"
          class="p-button p-button-rounded p-button-danger"
      >
        CANCEL
      </pv-button>
    </div>
  </div>
</template>

<script>
import { BookService } from "@/publish/services/book-service";

export default {
  name: "write",
  data() {
    return {
      book:{ },
    };
  },
  async created() {
    const bookId = this.$route.params.id;
    this.bookService = new BookService();
    let responseBook=await this.bookService.getById(bookId);
    this.book=responseBook.data;
    console.log("Response from BookService:", responseBook);
  },
  methods: {
    async saveContent() {
      try {
        await this.bookService.update(this.book.id, this.book);
        this.$router.push({ name: 'publish' });
      } catch (error) {
        console.error("Error saving book content:", error);
      }
    },
    cancelEdit() {
      this.$router.push({ name: 'publish' });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.write-container {
  margin: auto;
  max-width: 800px;
  padding: 20px;
}

h1 {
  font-family: Arial, sans-serif;
  text-align: center;
}

.text-editor {
  width: 100%;
  height: 400px;
  margin-top: 20px;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.p-button {
  font-family: Arial, sans-serif;
  font-size: 16px;
  padding: 10px 20px;
}
</style>