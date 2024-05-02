<template>
    <div class="container">
        <h1 class="title">{{ bookData.title }}</h1>
        <div class="content">
            <img class="image" :src="bookData.thumbnailUrl" :alt="bookData.title">
            <div class="synopsis">
              <h3>SYNOPSIS: </h3>
              {{ bookData.synopsis }}
            </div>
        </div>
    </div>
</template>
<script>
import {BookService} from "@/publish/services/book-service";

export default {
    name: "book-item",
    data(){
        return{
            bookData:{}
        };
    },
    async created() {
        const bookId = this.$route.params.id;
        this.bookService = new BookService();
        let responseBook=await this.bookService.getById(bookId);
        this.bookData=responseBook.data;
    },
    methods:{
    }
}
</script>

<style scoped>
h1{
  text-align: center;
  font-family: Arial, sans-serif;
}
.container {
    display: inline-block;
    text-align: center;
}
.title {
    font-family: 'Inter', sans-serif;
}
.content {
    display: flex;
    align-items: center;
}
.synopsis {
    margin-left: 50px;
    margin-right: 50px;
    text-align: justify;
}
.image{
    width: 300px;
    height: 400px;
}
</style>
