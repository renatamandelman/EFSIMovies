import axios from "axios";

const api_key = "cbe81e5924160520ab9932d7a8845f28";

export const obtenerPeliculaPorTipo = async (tipo) => await axios.get(`https://api.themoviedb.org/3/movie/${tipo}?api_key=${api_key}&language=en-US`);

export const obtenerPeliculaPorId = async id => await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`);

export const obtenerPeliculaPorTipoYFiltro = async (tipo, filtro) => await axios.get(`https://api.themoviedb.org/3/movie/${tipo}?api_key=${api_key}&group=${filtro}&language=en-US`);