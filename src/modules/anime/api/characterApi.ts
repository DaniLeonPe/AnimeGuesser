import axios from 'axios';

/**
 * Función para obtener la información de un anime desde la API externa.
 * 
 * Hace una petición HTTP a la API de Jikan para obtener los detalles de un anime
 * usando su ID y devuelve la data correspondiente del anime. En caso de error,
 * se retorna un objeto indicando que ocurrió un error.
 * 
 * @param {number} animeId - El ID del anime que se desea obtener.
 * @returns {Promise<Object>} - La data del anime o un objeto de error si la solicitud falla.
 * @example
 * const anime = await fetchAnimeFromApi(1);
 * console.log(anime);
 */
export const fetchAnimeFromApi = async (animeId: number) => {
  try {
    // Hacemos la petición a la API de Jikan usando el ID del anime
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);
    return response.data.data;  // Retorna la data del anime
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Si hay un error, devolvemos un objeto con la propiedad error y el mensaje del error
    return { error: true }; 
  }
};
