import react from "react";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="image-thumb" />
  </div>
);

export default Thumb;
