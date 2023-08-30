import ListPosts from "../components/ListPosts"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      {/* esta esperando recibir una url que se asigno en listPost.jsx */}
      <ListPosts url={"/posts"}/>
    </main>
  )
}

export default Home
