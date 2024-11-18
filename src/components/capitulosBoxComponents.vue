<template>
    <RouterLink :to="{ name: 'SingleCapituloPage', params: { id: id } }">
        <div class="capitulos-box-item">
            <span>{{ episode + " " + name + " " + air_date }}</span>
        </div>
    </RouterLink>
</template>

<script setup>
    const props = defineProps({
        id: Number,
        name: String,
        air_date: String,  
        episode: String
    });
</script>
