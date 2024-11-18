<template>
    
    <div class="info-capitulos-container">
        <router-link to='/'>
            <button>ATRAS</button>
        </router-link>
        <router-link :to="{ name: 'PersonajePages', params: { id: id } }">
            <infoCapítuloBoxComponent
            v-for="(character, index) in charactersList"
            :id="character.id"
            :personaje="character.name"
            />
        </router-link>
    </div>
    <!-- 
    <div v-for="(data, key) in characters">
        {{ data.name }}
    </div> -->
    
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router'
    import infoCapítuloBoxComponent from './../components/infoCapítuloBoxComponent.vue';
    
    const episodesList = ref([]);
    const charactersList = ref([]);
    
    let route = useRoute();
    let id = ref(route.params.id);
    let characters = ref({});
    
    onMounted(() => {
    fetch("https://rickandmortyapi.com/api/episode/" + route.params.id)
        .then(response => response.json())
        .then(data => {
            episodesList.value = data;
    
            //console.log(episodesList.value.characters);
    
            for(let i = 0 ; i < episodesList.value.characters.length ; i++){
                fetch(episodesList.value.characters[i])
                .then(data => data.json()).then((data) => {
                    console.log(data);
                    charactersList.value.push({
                        id: data.id,
                        name: data.name
                });
                })
            }
        });
    });
    </script>

<style scoped>
@import "../assets/stylesCapitulos.scss"
</style>