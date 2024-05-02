<template>
    <div>
        <h1>TOP POST THIS WEEK</h1>
        <article-card-component v-if="books.length > 0" :booksCard="books"></article-card-component>
    </div>
    <div>
        <h1>What You May Like</h1>
        <div class="article-container">
            <ul>
                <li v-for="(book, index) in books.slice(0, 5)" :key="book.id">
                    <p class="book-title">{{ book.title }}</p>
                    <img class="img-container" :src="book.thumbnailUrl" :alt="book.title" @click="this.showBookInfo(book)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ArticleCardComponent from "./article-card.component.vue";
import {BookService} from "@/publish/services/book-service";

export default {
    name: "main-content.component",
    components: {ArticleCardComponent},
    data() {
        return {
            books: [],
        };
    },
    async created() {
        this.bookService = new BookService();
        let response = await this.bookService.getAll();
        this.books = response.data;
    },
    methods:{
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
