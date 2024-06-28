<template>
    <div>
      <h1 class="text-center">Every story begins with a single WORD</h1>
      <pv-menubar class="elements justify-content-center flex-wrap gap-8" >
        <template #start><h3>Your Work</h3></template>
        <template #end><pv-button @click="saveBook" class="p-button p-button-rounded p-button-success ">PUBLISH</pv-button></template>
      </pv-menubar>
      <table>
        <thead>
          <tr>
            <th><p>PHOTO</p></th>
            <th><p>TITLE</p></th>
            <th><p>PUBLICATION DATE</p></th>
            <th><p>WRITE</p></th>
            <th><p>VIEWS</p></th>
            <th><p>ACTIONS</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in filteredbooks" :key="index">
            <td><img class="img-container" :src="book.thumbnailUrl" :alt="book.title" @click="showBookInfo(book)"></td>
            <td>{{ book.title }}</td>
            <td>{{ book.publishedAt }}</td>
            <td>
              <pv-button
                  aria-label="Edit" icon="pi pi-pencil" class="p-button-text p-button-rounded" size="large"
                  @click="editBookText(book)"
              />
            </td>
            <td>{{book.visitCount}}</td>
            <td>
              <pv-button
                  aria-label="Erase" icon="pi pi-trash" class="p-button-text p-button-rounded" size="large"
                  @click="deleteBook(book)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
import { BookService } from "@/publish/services/book-service";
import { ChapterService } from "@/publish/services/chapter-service";
import { mapState } from "vuex";

export default {
    name: "your-artwork",
    data() {
        return {
            publishedBooks: [],
        };
    },
    computed: {
      ...mapState(['profile', 'isAuthenticated']),
      filteredbooks(){
        return this.publishedBooks.filter(
            (book)=>this.profile.id===book.userProfile.id
        );
      },
    },
    async created() {
        this.bookService = new BookService();
        await this.getPublishedBooks();
    },
    methods: {
        async getPublishedBooks() {
          let responseBook = await this.bookService.getAll();
          this.publishedBooks = responseBook.data;
          console.log("Response from BookService:", responseBook);
        },
        showBookInfo(book) {
          this.$router.push({ name: 'book-item', params: { id: book.id } });
        },
        async deleteBook(book){
          const bookService = new BookService();
          await bookService.delete(book.book.id);
          const index = this.publishedBooks.findIndex(b => b.id === book.id);
          if (index !== -1) {
            this.publishedBooks.splice(index, 1);
          }
        },
        saveBook(){
            this.$router.push({name: 'create'});
        },
      editBookText(book) {
        this.$router.push({ name: 'write', params: { id: book.id } });
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
h1, h3, p, td{
  font-family: Arial, sans-serif;
}
h3{
  display: inline-block;
  margin: auto;
}
.text-center {
    text-align: center;
}
.img-container {
    max-width: 100px;
}
table {
    width: 100%;
}
th, td {
    text-align: center;
    vertical-align: middle;
}

</style>
