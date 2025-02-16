<template>
  <div
    v-if="anime"
    class="flex flex-col justify-center items-center p-6 bg-gray-800 rounded-xl shadow-xl max-w-xs mx-auto"
  >
    <h2 class="text-2xl font-semibold text-white mb-4 text-center tracking-wide">
      Adivina el anime
    </h2>
    
    <img
      :src="anime.images.jpg.large_image_url"
      alt="Imagen del Anime"
      class="anime-image mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "AnimeCard",
  props: {
    /**
     * Objeto que contiene la información del anime.
     */
    anime: {
      type: Object as () => {
        images: {
          jpg: {
            large_image_url: string;
          };
        };
      },
      required: true,
    },
    /**
     * El título correcto del anime que el usuario debe adivinar.
     */
    correctTitle: {
      type: String,
      required: true,
    },
  },
  emits: ['newGame'],
};
</script>

<style scoped>
.anime-image {
  width: 375px; /* Ancho fijo */
  height: 525px; /* Alto fijo */
  object-fit: cover; /* Mantiene la proporción sin deformar */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}
</style>
