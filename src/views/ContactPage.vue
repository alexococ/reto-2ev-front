<script setup lang="ts">
import Contacto from '@/components/Contact.vue'

</script>

<template>
    <Contacto />
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
    --box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px;
}

body {
    background-color: #0b193b;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 1.5rem;
}
</style>