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
            <th><p>NUMBER OF CHAPTERS</p></th>
            <th><p>PUBLICATION DATE</p></th>
            <th><p>ACTIONS</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in publishedBooks" :key="index">
            <td><img class="img-container" :src="book.booksImage" :alt="book.booksTitle" @click="showBookInfo(book)"></td>
            <td>{{ book.booksTitle }}</td>
            <td>{{ book.chaptersNumber }}</td>
            <td>{{ book.booksDate }}</td>
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
    computed: { ...mapState(['profile', 'isAuthenticated']) },
    data() {
        return {
            publishedBooks: [],
            book:{
              booksId: "",
                booksImage: "",
                booksTitle: "",
                booksDate: "",
                chaptersNumber: 0
            }
        };
    },
    async created() {
        this.bookService = new BookService();
        this.chapterService = new ChapterService()
        await this.getPublishedBooks();
    },
    methods: {
        async getPublishedBooks() {
            let responseBook = await this.bookService.getAll();
            let responseChapter = await this.chapterService.getAll();
            for (let bookAux of responseBook.data) {
                if (this.profile.id === bookAux.profileId) {
                    this.book = {
                        booksId : bookAux.id,
                        booksImage: bookAux.thumbnailUrl,
                        booksTitle: bookAux.title,
                        booksDate: bookAux.publishedAt,
                        chaptersNumber: 0
                    };
                    for (let chapterAux of responseChapter.data) {
                        if (bookAux.id === chapterAux.book.id) {
                            this.book.chaptersNumber += 1;
                        }
                    }
                    this.publishedBooks.push(this.book);
                }
            }
        },
        showBookInfo(book) {
          this.$router.push({ name: 'book-item', params: { id: book.id } });
        },
        async deleteBook(book){
          const bookService = new BookService();
          await bookService.delete(book.booksId);
          const index = this.publishedBooks.findIndex(b => b.booksId === book.booksId);
          if (index !== -1) {
            this.publishedBooks.splice(index, 1);
          }
        },
        saveBook(){
            this.$router.push({name: 'create'});
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
