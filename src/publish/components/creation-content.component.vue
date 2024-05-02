<template>
    <div>
        <h1>POPULAR</h1>
        <div class="article-container">
            <ul>
                <li v-for="(book, index) in books.slice(0,5)" :key="book.id">
                    <p class="book-title">{{ book.title }}</p>
                    <img class="img-container" :src="book.thumbnailUrl" :alt="book.name" @click="this.showBookInfo(book)">
                </li>
            </ul>
        </div>
    </div>
    <div v-for="(books, genre) in booksByGenre" :key="genre">
      <h1>{{ genre.toUpperCase() }}</h1>
        <div class="article-container">
            <ul>
                <li v-for="(book, index) in books" :key="book.id">
                    <p class="book-title">{{ book.title }}</p>
                    <img class="img-container" :src="book.thumbnailUrl" :alt="name" @click="this.showBookInfo(book)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {BookService} from "@/publish/services/book-service";
import {BookGenreService} from "@/publish/services/book-genre-service";
import {GenreService} from "@/publish/services/genre-service";

export default {
    name: "creation-content.component",
    data() {
        return {
            books: [],
            bookgenres: [],
            booksByGenre:{}
        };
    },
    async created() {
        this.bookService = new BookService();
        this.bookGenreService = new BookGenreService();
        this.genreService = new GenreService();
        await this.creation();
    },
    methods:{
        async creation(){
            let responseBook = await this.bookService.getAll();
            this.books = responseBook.data;
            let booksTitle = {};
            let booksImage = {};
            for (let bookAux of responseBook.data) {
                booksTitle[bookAux.id] = bookAux.title;
                booksImage[bookAux.id] = bookAux.thumbnailUrl;
            }
            console.log(booksTitle);
            console.log(booksImage);
            let responseGenre = await this.genreService.getAll();
            let genresName= {};
            for (let genreAux of responseGenre.data) {
                genresName[genreAux.id] = genreAux.name;
            }
            console.log(genresName);
            let responseBookGenre = await this.bookGenreService.getAll();
            this.bookgenres=responseBookGenre.data.map(check=>{
                check.title=booksTitle[check.bookId];
                check.thumbnailUrl=booksImage[check.bookId];
                check.genre=genresName[check.genreId];
                return check;
            })
            console.log(responseBookGenre);
            this.bookgenres.forEach((book) => {
                if (!this.booksByGenre[book.genre]) {
                    this.booksByGenre[book.genre] = [];
                }
                this.booksByGenre[book.genre].push(book);
            });
            new Date().toISOString().slice(0, 10);
            console.log(Date());
        },
      showBookInfo(book) {
        this.$router.push({ name: 'book-item', params: { id: book.id } });
      }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

h1{
    text-align: center;
    font-family: Arial, sans-serif;

}
h2{
    font-family: Arial, sans-serif;
}
.article-container{
    display: flex;
    flex-wrap: wrap;
}
.article-container ul {
    display: flex;
    flex-wrap: wrap;
}
.article-container li {
    list-style: none;
    margin: 10px;
    text-align: center;
}
.img-container{
    width: 300px;
    height: 400px;
}
.book-title {
    font-weight: bold;
    font-family: 'Inter', sans-serif;
}
</style>
