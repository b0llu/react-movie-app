import react from "react";

//styles
import { Wrapper, Content, Text } from "./HeroImage.style";
// import './style.css'

const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    {/* <div className="temp">
      <img src={image}/>
    </div> */}
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
