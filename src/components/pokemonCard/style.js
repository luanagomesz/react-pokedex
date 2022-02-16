import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: fadeIn;
  animation-duration: 500ms;
  margin-bottom: 30px;
  :hover {
    transform: translateY(-3px);

    transition: transform 200ms;
  }
  figure {
    margin: 0px;
    width: 180px;
    height: 180px;
    margin-bottom: 10px;
    background-color: #eeeeee;
    border-radius: 5px;
  }
  img {
    width: 180px;
    margin: 5px;
    image-rendering: pixelated;
    cursor: pointer;
    animation-name: Jump;
    animation-duration: 500ms;
  }
  span {
    align-self: baseline;
    margin-left: 20px;
    font-size: 13px;
    margin-bottom: 10px;
    color: #666665;
  }
  h2 {
    align-self: baseline;
    margin-left: 20px;
    margin-bottom: 5px;
    font-size: 19;

    span {
      color: gold;
      animation-name: fadeIn;
      animation-duration: 500ms;
      margin-left: 0px;
    }
  }
  div {
    align-self: baseline;
    margin-left: 20px;
    display: flex;
    p:first-child {
      margin-right: 5px;
    }
    p {
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes Jump {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
      height: 190px;
    }
    40% {
      height: 170px;
    }
  }
`;

export const PokeType = styled.p`
  color: white;
  padding: 3px 10px 3px 10px;
  font-size: 15px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "grass"
      ? "green"
      : props.type === "poison"
      ? "purple"
      : props.type === "fire"
      ? "red"
      : props.type === "flying"
      ? "LightBlue"
      : props.type === "water"
      ? "MediumSlateBlue"
      : props.type === "bug"
      ? "Olive"
      : props.type === "normal"
      ? "grey"
      : props.type === "rock"
      ? "#DAA520"
      : props.type === "ground"
      ? "#B8860B"
      : props.type === "psychic"
      ? "DarkOrchid"
      : props.type === "electric"
      ? "#FFD700"
      : props.type === "steel"
      ? "LightSteelBlue"
      : props.type === "ice"
      ? "LightSkyBlue"
      : props.type === "ghost"
      ? "MediumPurple"
      : props.type === "fairy"
      ? "Pink"
      : props.type === "dragon"
      ? "Maroon"
      : props.type === "dark"
      ? "black"
      : props.type === "fighting"
      ? "Tan"
      : "grey"};
`;
