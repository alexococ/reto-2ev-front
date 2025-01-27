<script setup lang ="ts">
import Header from '@/components/Header.vue'
import Tarjetas from '@/components/CardIndex.vue'
import Slider from '@/components/Carrousel.vue'
import Footer from '@/components/Footer.vue'
import ReserveIndex from '@/components/ReserveIndex.vue'
</script>

<template>
    <Header />
    <br><br><br><br><br><br>
  <Slider/>
  <br>
  <Tarjetas />
  <ReserveIndex/>
  <Footer/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

:root {
  --dark-color: #63595c;
  --bg-color: #934DEE;
  --text-color: #fff;
  --main-color: #fff;
  --btn-color: #934DEE;

}
body {
  background-color: #0B193B;
  font-family: "Poppins", sans-serif;
}
body::-webkit-scrollbar {
  width: 12px;
}
body::-webkit-scrollbar-track {
  background: transparent;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border-radius: 20px;
  border: 1px solid var(--dark-color);
}
</style>
