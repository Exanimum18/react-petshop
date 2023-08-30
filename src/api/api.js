// Libreria para ahcer peticiones HTTP
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000"
})

// Funcion para llamar los datos
export const buscar = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}
