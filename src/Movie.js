import React from 'react'
import { motion } from 'framer-motion'
const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opasity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
    </motion.div >
  )
}

export default Movie