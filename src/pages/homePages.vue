<template>
    <div class="rickyMorty-container">
        <h1>RICK AND MORTY EPISODES</h1>
        <Splide :options="{ perPage: 5, gap: '1rem', pagination: true, breakpoints: { 768: { perPage: 1 } } }">
            <SplideSlide
                v-for="(capitulo, index) in listaCapitulos"
                :key="index"
            >
                <capitulosBoxComponents 
                    :id="index + 1"
                    :name="capitulo.name"
                    :air_date="capitulo.air_date"
                    :episode="capitulo.episode"
                />
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Importar estilos de Splide
import capitulosBoxComponents from '@/components/capitulosBoxComponents.vue';

const listaCapitulos = ref([]);

onMounted(() => {
    fetch("https://rickandmortyapi.com/api/episode")
        .then(response => response.json())
        .then(data => {
            listaCapitulos.value = data.results;
        });
});
</script>

<style scoped>
@import "/src/assets/styles.scss";


</style>
