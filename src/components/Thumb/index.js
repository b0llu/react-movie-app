import { click } from "@testing-library/user-event/dist/click";
import react from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="image-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="image-thumb" />
    )}
  </div>
);

export default Thumb;
