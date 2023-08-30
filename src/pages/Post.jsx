//usar useState para poder traer la informacion de cada post y el useEffect para comunicarnos con el servidor
import { useState, useEffect } from "react"
//Ingresa la función y la devuelve como un objeto, así podemos hacer destructuración
import { useParams, useNavigate } from "react-router-dom"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"

const Post = ({url}) => {
  const [post, setPost] = useState({})

  const { id } = useParams()

  // Para poder navegar a una ruta en especifico
  const navigate = useNavigate()

  useEffect(() => {
    //Buscar nos devuelve una promesa, podemos usar el catch por si hay algun error
    buscar(`/posts/${id}`, setPost).catch(() => {
      // Acá se envía a la ruta de 'no existe', gracias al hook useNavigate
      navigate("/not-found")
    })
  }, [id]) // cada vez que cambie el id se ejecute la función

 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post
