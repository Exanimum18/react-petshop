import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Page404 from './pages/Page404'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
        {/* para identificar cada post */}
        <Route path='/posts/:id' element={<Post />}/>

        {/* se crea un pagina de categorias para poder filtrarlas */}
        <Route path='/categoria/:id/*' element={<Categoria />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </Router>
  );
}

export default App;
