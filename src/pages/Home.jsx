import ListPosts from "../components/ListPosts"

// Importamos para mostrar los filtros sobre los posts
import ListCategories from "../components/ListCategories"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />

      {/* esta esperando recibir una url que se asigno en listPost.jsx */}
      <ListPosts url={"/posts"}/>
    </main>
  )
}

export default Home
