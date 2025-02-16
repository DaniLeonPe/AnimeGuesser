<template>
  <!-- Contenedor principal de la aplicación -->
  <div
    id="app"
    class="app-container"
  >
    <!-- Título de la aplicación -->
    <h1 class="text-4xl font-bold text-white mb-8 text-center tracking-wide">
      ¡AnimeGuesser!
    </h1>

    <!-- Componente AnimeCard que muestra el anime y recibe propiedades para la adivinanza -->
    <AnimeCard
      :anime="anime || { images: { jpg: { large_image_url: '' } } }"
      :correct-title="correctTitle"
      @new-game="newGame"
    />

    <!-- Sección para la entrada del usuario -->
    <div class="container mt-6 w-full max-w-sm mx-auto">
      <!-- Input donde el usuario escribe su adivinanza -->
      <input
        v-model="userGuess"
        placeholder="Escribe el nombre del anime"
        class="text-center p-3 w-full rounded-lg text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200 shadow-md hover:shadow-lg transition-all mb-4"
      >
      
      <!-- Contenedor de botones separados -->
      <div class="button-container">
        <!-- Botón para enviar la adivinanza -->
        <button
          class="py-3 w-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg shadow-lg hover:from-indigo-800 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          @click="checkAnswer"
        >
          Adivinar
        </button>

        <!-- Botón para revelar pista -->
        <button
          class="py-3 w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg shadow-lg hover:from-yellow-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          @click="revealHint"
          :disabled="hintRevealed"
        >
          {{ hintRevealed ? 'Pista revelada' : 'Mostrar pista' }}
        </button>

        <!-- Botón para empezar un nuevo juego -->
        <button
          v-if="anime"
          class="py-3 w-full bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg shadow-lg hover:from-green-800 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          @click="newGame"
        >
          Nuevo Anime
        </button>
      </div>
    </div>

    <!-- Sección de pistas -->
    <div
      v-if="hintRevealed"
      class="mt-4 text-lg font-semibold text-yellow-300 text-center"
    >
      <p>Pista: {{ hint }}</p>
    </div>

    <!-- Mensaje que muestra si el usuario ha acertado o no -->
    <div
      v-if="message"
      class="mt-4 text-xl font-semibold text-white text-center"
    >
      <p>{{ message }}</p>
    </div>

    <!-- Mensaje de error en caso de que la respuesta no sea válida -->
    <div
      v-if="errorMessage"
      class="mt-4 text-xl font-semibold text-red-500 text-center"
    >
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * Componente principal de la aplicación AnimeGuesser.
 * 
 * Permite al usuario adivinar el nombre de un anime mostrando
 * una carta con el anime, y luego ingresando su respuesta. 
 * También incluye pistas para ayudar al usuario en la adivinanza.
 * 
 * @component
 * @example
 * <AnimeGuesser />
 */
import { useAnimeGame } from '../modules/anime/composables/useAnimegame';
import AnimeCard from '../components/AnimeCard.vue';

export default {
  components: {
    AnimeCard, // Componente que muestra detalles del anime
  },
  setup() {
    // Usamos el composable useAnimeGame para gestionar la lógica del juego
    const {
      anime, // Anime actual que se debe adivinar
      userGuess, // Respuesta ingresada por el usuario
      message, // Mensaje a mostrar si la respuesta es correcta
      errorMessage, // Mensaje de error en caso de una respuesta incorrecta
      correctTitle, // Título correcto del anime
      hint, // Pista sobre el anime
      hintRevealed, // Estado de la pista (si ya se reveló o no)
      revealHint, // Función para mostrar la pista
      checkAnswer, // Función para verificar la respuesta del usuario
      newGame, // Función para iniciar un nuevo juego
    } = useAnimeGame(); 

    return {
      anime,
      userGuess,
      message,
      errorMessage,
      correctTitle,
      hint,
      hintRevealed,
      revealHint,
      checkAnswer,
      newGame,
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a202c; 
  padding: 2rem; 
}

/* Estilos para separar los botones */
.button-container button {
  margin-bottom: 10px; /* Agrega separación entre botones */
}

.button-container button:last-child {
  margin-bottom: 0; 
}
button{
  padding: 10px;
}
input{
  width: 200px;
}
.container{
  justify-content: center;
  align-items: center;
}
</style>
