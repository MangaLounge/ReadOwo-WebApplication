<template>
    <footer class="footer bg-black-alpha-90">
        <div class="footer-item">
            <a class="terms" href="/terms-conditions"><p>Terms and conditions</p></a>
        </div>
        <div class="footer-item">
            <p>ReadOWO &copy All rights reserved - MangaLounge</p>
        </div>
        <div class="footer-item">
            <p>Our Social Media</p>
            <div class="social-icons">
              <a :href="icons[0].link" ><i class="pi pi-facebook"></i></a>
              <a :href="icons[1].link" ><i class="pi pi-instagram"></i></a>
              <a :href="icons[2].link" ><i class="pi pi-youtube"></i></a>
              <a :href="icons[3].link" ><i class="pi pi-twitter"></i></a>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-content.component",
  data: () => ({
    icons: [
      { link:'https://web.facebook.com/profile.php?id=100092188931885&_rdc=1&_rdr'},
      { link:'https://www.instagram.com/mangalounge/'},
      { link:'https://www.youtube.com/channel/UCilJAMoJVGS3TZwV-YuBpRg'},
      { link:'https://twitter.com/LoungeManga'},
    ]
  })
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;
    height: 150px;
    font-family: system-ui;
}
.footer-item {
    margin: 0 10px;
}

a:link{
    color: white;
    text-decoration: none;
}

a:visited{
    color: white;
    text-decoration: none;

}
.social-icons{
    justify-content: space-between;
    display: flex;
}
</style>