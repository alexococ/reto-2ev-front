<script setup lang ="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Carrousel from '@/components/Carrousel.vue';
import CardIndex from '@/components/CardIndex.vue';
import ReserveIndex from '@/components/ReserveIndex.vue';

const router = useRouter()

</script>

<template>
<router-view></router-view>
</template>

