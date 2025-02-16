import { ref } from 'vue';
import { fetchAnimeFromApi } from '../api/characterApi';

/**
 * Composable que gestiona la lógica del juego de adivinanza de anime.
 * 
 * Este composable maneja el estado del juego, incluyendo el anime actual,
 * la respuesta del usuario, los mensajes de éxito o error, las pistas y 
 * las funciones para generar un número aleatorio, cargar un anime y 
 * comprobar la respuesta del usuario.
 * 
 * @returns {Object} Estado y funciones del juego.
 * @example
 * const { anime, userGuess, message, errorMessage, hint, revealHint, checkAnswer, newGame } = useAnimeGame();
 */
export const useAnimeGame = () => {
  const anime = ref(null); // Datos del anime
  const userGuess = ref(''); // Respuesta del usuario
  const message = ref(''); // Mensaje de respuesta correcta o incorrecta
  const errorMessage = ref(''); // Mensaje de error al cargar el anime
  const correctTitle = ref(''); // Título correcto del anime
  const hint = ref(''); // Pista sobre el anime
  const hintRevealed = ref(false); // Indica si la pista ha sido revelada

  /**
   * Genera un número aleatorio entre 1 y 500.
   * @returns {number} Número aleatorio entre 1 y 500.
   */
  const generateRandomNumber = () => Math.floor(Math.random() * 500) + 1;

  /**
   * Obtiene un anime aleatorio desde la API y establece su información.
   * También inicializa una pista basada en el género o alguna otra característica.
   * @returns {Promise<void>} Promesa que resuelve al cargar el anime.
   */
  const fetchAnime = async () => {
    try {
      const randomId = generateRandomNumber();
      const response = await fetchAnimeFromApi(randomId);
  
      if (!response || response.status === 404) {
        // Si la respuesta es 404, volvemos a intentar obtener un anime.
        return fetchAnime();
      }

      const rating = response.rating || '';  // Si no existe rating, se considera como una cadena vacía
      const type = response.type || '';  // Obtener el tipo de anime (TV, OVA, Movie, etc.)
      hintRevealed.value = false;
      // Lista de calificaciones restringidas (contenido +18)
      const restrictedRatings = ['Rx - Hentai', 'R - 17+ (violence & profanity)', 'R+ - Mild Nudity'];
  
      // Verificamos si el anime tiene un rating restringido o si es una película o OVA
      if (
        restrictedRatings.includes(rating) || 
        type === 'OVA' || 
        type === 'Movie'
      ) {
        // Si cumple alguna de las condiciones, volvemos a pedir otro anime
        return fetchAnime(); // Llamamos recursivamente a fetchAnime para obtener otro anime
      }
  
      // Verificamos si existe la propiedad titles y obtenemos el título en español
      const spanishTitle = response.titles && Array.isArray(response.titles)
        ? response.titles.find((title: { type: string }) => title.type === 'Spanish')?.title
        : null;

      correctTitle.value = spanishTitle || response.title;
      anime.value = response;
      message.value = '';
      userGuess.value = '';
      
      // Establecer una pista sobre el anime
      hint.value = `Género principal: ${response.genres[0]?.name || 'Desconocido'}`;
      
      hintRevealed.value = false;
    } catch (error) {
      errorMessage.value = 'Error al cargar anime, intenta de nuevo más tarde.' + error;
    }
  };

  /**
   * Comprueba si la respuesta del usuario es correcta.
   * @returns {void}
   */
  const checkAnswer = () => {
    if (!userGuess.value) {
      errorMessage.value = 'Por favor ingresa un nombre.';
      return;
    }

    if (userGuess.value.toLowerCase() === correctTitle.value.toLowerCase()) {
      message.value = '¡Correcto! 🎉';
    } else {
      message.value = '¡Incorrecto! Intenta de nuevo.';
    }
  };

  /**
   * Inicia un nuevo juego con un nuevo anime.
   * @returns {void}
   */
  const newGame = () => {
    fetchAnime();
    message.value = '';
    errorMessage.value = '';
  };

  /**
   * Revela la pista al usuario.
   * @returns {void}
   */
  const revealHint = () => {
    hintRevealed.value = true;
  };

  // Cargar un anime inicial al iniciar el juego
  fetchAnime();

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
};
