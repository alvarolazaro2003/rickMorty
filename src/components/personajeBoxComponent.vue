<template>
    <div class="caracteristicas-box-item">
      <img :src="foto" :alt="`Imagen de ${nombre}`" class="personaje-img" />
      <span>Nombre: {{ nombre }}</span>
      <span>Estado: {{ estado }}</span>
      <span>Especie: {{ especie }}</span>
      <span>Género: {{ genero }}</span>
      <span>Ciudad: {{ ciudad }}</span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    id: Number,
    nombre: String,
    estado: String,
    especie: String,
    genero: String,
    ciudad: String,
    foto: String,
  });
  </script>
  
  <style>
  .caracteristicas-box-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    color: black;
    background-color: white;
  }
  
  .personaje-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  