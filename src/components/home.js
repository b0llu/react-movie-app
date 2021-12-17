import react, { useState, useEffect } from "react";

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components


//hook
import { useHomeFetch } from "../../src/hooks/useHomeFetch";

// image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
