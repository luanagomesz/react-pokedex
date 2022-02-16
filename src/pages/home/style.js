import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  @media (max-width: 550px) {
    height: fit-content;
  }

  footer {
    background-color: #eeeeee;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50px;

    span {
      font-size: 10px;
    }
    svg:first-child {
      margin-right: 5px;
      margin-left: 10px;
    }
    svg {
      margin-left: 5px;
      cursor: pointer;
      :hover {
        color: grey;
      }
    }
  }
`;

export const ContainerContent = styled.main`
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  h1,
  h2,
  p {
    margin: 0px;
  }

  header {
    display: flex;
    align-items: center;
    width: 80%;
    padding: 0px 20px 0px 20px;
    max-width: 837px;
    justify-content: space-between;
    height: 90px;
    background-color: Tomato;
    box-shadow: 0px 0px 20px 2px lightgray;
    z-index: 2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    img {
      width: 180px;
      cursor: pointer;
      :hover {
        filter: contrast(125%);
      }
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button {
          border: none;
          background-color: yellow;

          height: 32px;
          width: 35px;
          text-align: center;
          border-radius: 5px;
          border-bottom-left-radius: 0px;
          border-top-left-radius: 0px;
          cursor: pointer;
          svg {
            color: tomato;
            align-items: center;
          }
        }
      }
      input {
        border-radius: 5px;
        border: none;
        height: 30px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      p {
        color: white;
        text-shadow: 1px 1px 1px #000000;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 550px) {
    header {
      width: 100%;

      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      img {
        margin-left: 10px;
        width: 120px;
      }
      div {
        margin-right: 10px;
      }

      input {
        width: 120px;
      }
    }
  }
`;
export const ContainerCards = styled.div`
  padding: 0px 20px 25px 20px;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  width: 80%;
  height: 670px;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  max-width: 837px;
  box-shadow: 0px 0px 20px 2px lightgray;
  .pages {
    width: 100%;
    max-width: 837px;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    max-height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    .voltar {
      display: flex;
      button:first-child {
        color: white;
        font-size: 18px;
        padding: 5px;
      }
    }
    div {
      display: flex;

      align-items: center;
      button:first-child {
        font-size: 40px;

        border-radius: 5px;
        margin-right: 10px;
        margin-left: 0px;
      }
      button {
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: tomato;
        border: none;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
        :hover {
          background-color: orangered;
        }
      }
      button svg {
        filter: invert(100%) sepia(97%) saturate(12%) hue-rotate(238deg)
          brightness(104%) contrast(104%);
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    overflow-y: auto;
    max-height: 580px;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: tomato;
      border-radius: 10px;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
    height: fit-content;

    .container {
      max-height: 100vh;
      margin-top: 15px;
    }
    .pages {
      margin-top: 10px;
      margin-bottom: 0px;
      div {
        button {
          font-size: 30px;
        }
      }
    }
  }
`;
