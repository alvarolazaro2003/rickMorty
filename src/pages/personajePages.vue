<template>
    <div class="info-personajes-container">
      <router-link to="/">
        <button>ATRÁS</button>
      </router-link>
      <personajeBoxComponent
        v-if="personaje"
        :nombre="personaje.name"
        :estado="personaje.status"
        :especie="personaje.species"
        :genero="personaje.gender"
        :ciudad="personaje.location?.name"
        :foto="personaje.image"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import personajeBoxComponent from '@/components/personajeBoxComponent.vue';
  
  const route = useRoute();
  const personaje = ref(null);
  
  const fetchPersonajeData = async (id) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (response.ok) {
        personaje.value = await response.json();
      } else {
        console.error("Failed to fetch character data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  onMounted(() => {
    const id = route.params.id;
    fetchPersonajeData(id);
  });
  </script>
  
  <style>
  .info-personajes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  