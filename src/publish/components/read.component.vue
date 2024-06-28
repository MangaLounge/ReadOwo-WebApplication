<template>
  <div class="container">
    <h1 class="title">{{ bookData.title }}</h1>
    <div class="content">
      <img class="image" :src="bookData.thumbnailUrl" :alt="bookData.title">
      <div class="full-text">
        <h3>CHAPTER 1 :</h3>
        <p>{{ bookData.fullText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {BookService} from "@/publish/services/book-service";
import {mapState} from "vuex";
export default {
  name: "read",
  computed: {
    ...mapState(['profile'])
  },
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
    if(this.bookData.userProfile.id != this.profile.id){
      this.bookData.visitCount += 1;
    }
    await this.bookService.update(this.bookData.id, this.bookData);
  },
  methods:{
  }
}
</script>

<style scoped>
h1 {
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

.full-text {
  margin-left: 50px;
  margin-right: 50px;
  text-align: justify;
}

.image {
  width: 300px;
  height: 400px;
}
</style>