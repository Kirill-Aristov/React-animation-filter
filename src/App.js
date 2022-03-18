import { useEffect, useState } from "react"
import './App.css';
import Filter from "./Filter";
import Movie from "./Movie";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)
  useEffect(() => {
    fetchPopular()
  }, []);
  let url = "https://api.themoviedb.org/3/movie/popular?api_key=9aaaaf42a37cb2359a740a3402726ce9"
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
  }
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div >
  );
}

export default App;
