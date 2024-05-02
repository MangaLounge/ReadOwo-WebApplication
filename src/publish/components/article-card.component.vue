<template>
    <pv-card class="card-content">
        <template #header>
        </template>
        <template #content>
            <div class="prev-button" @click="prevBook">
                <i class="fas fa-arrow-left fa-3x"></i>
            </div>
            <transition-group name="book" tag="div" class="book-container">
                <div v-for="(book, index) in visibleBooks" :key="book.id" class="book">
                    <p class="book-title">{{book.title}}</p>
                    <img :src="book.thumbnailUrl" :alt="book.title" @click="this.showBookInfo(book)">
                </div>
            </transition-group>
            <div class="next-button" @click="nextBook">
                <i class="fas fa-arrow-right fa-3x"></i>
            </div>
        </template>
        <template #footer>
        </template>
    </pv-card>
</template>

<script>
export default {
    name: "article-card.component",
    props: {
        booksCard:Array
    },
    data() {
        return {
            visibleBooks:[],
            currentBookIndex: 0
        };
    },
    async created() {
        this.visibleBooks = this.booksCard.slice(0, 3);
    },
    methods:{
        prevBook() {
            if (this.currentBookIndex > 0) {
                this.currentBookIndex--;
                this.visibleBooks = this.booksCard.slice(this.currentBookIndex, this.currentBookIndex + 3);
            }
        },
        nextBook() {
            if (this.currentBookIndex < this.booksCard.length - 3) {
                this.currentBookIndex++;
                this.visibleBooks = this.booksCard.slice(this.currentBookIndex, this.currentBookIndex + 3);
            }
        },
      showBookInfo(book) {
        this.$router.push({ name: 'book-item', params: { id: book.id } });
      }
    }
}
</script>

<style scoped>
.card-content {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    max-width: 1100px;
    max-height: 550px;
    position: relative;
}
.book-title {
    font-weight: bold;
    font-family: 'Inter', sans-serif;
}
img{
    max-width: 300px;
    max-height: 400px;
}
.prev-button {
    position: absolute;
    top: 50%;
    left: 20px;
}
.next-button {
    position: absolute;
    top: 50%;
    right: 20px;
}
.book-container {
    display: flex;
    justify-content: center;
}

.book {
    margin: 0 10px;
}

.book-enter-active,
.book-leave-active {
    transition: all 500ms ease-in-out;
}

.book-enter,
.book-leave-to {
    opacity: 0;
}
</style>
