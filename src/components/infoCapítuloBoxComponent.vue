<template>
    <div class="personajes-box-item">
        <span>{{ id + " " + personaje}}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        id: Number,
        personaje: String
    });
</script>