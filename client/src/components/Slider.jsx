import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  transform: translateX(${(props) => props.index * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  width: 500px;
`;

const ToolTipText = styled.span`
  visibility: hidden;
  width: 120px;
  border: 1px solid black;
  top: -20px;
  background-color: #eee;
  color: black;
  font-size: 10px;
  border-radius: 6px;
  padding: 5px 0;
  /* Position the tooltip */
  position: absolute;

  opacity: 0.7;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  &:hover ${ToolTipText} {
    visibility: visible;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper index={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>

              <Button>
                Shop Now
                <ToolTipText>Grab the offer right now</ToolTipText>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
