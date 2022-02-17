import { CardContainer, PokeType } from "./style";
import { API } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import useGet from "../../services/useGet";
export const PokemonCard = ({ pokemonName, defaultShiny }) => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [reload, setReload] = useState(true);
  const [isMounted, setMounted] = useState(false);
  const [isShiny, setShiny] = useState(false);
  const [url, setUrl] = useState(`/pokemon-form/${pokemonName}`);
  const { data } = useGet(url);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted === true) {
      setPokemonInfo(data);
      setReload(true);
    }
  }, [data]);

  useEffect(() => {
    setShiny(false);
    setReload(false);
    setUrl(`/pokemon-form/${pokemonName}`);
    defaultShiny === true ? setShiny(true) : setShiny(false);
  }, [pokemonName]);

  useEffect(() => {
    defaultShiny === true ? setShiny(true) : setShiny(false);
  }, [defaultShiny]);

  const setImage = () => {
    let img = document.getElementById(`img${pokemonInfo.id}`);

    if (img.src === pokemonInfo.sprites.front_default) {
      img.src = pokemonInfo.sprites.back_default;
      img.style.animationName = "Jump";
      setTimeout(() => {
        img.style.animationName = "";
      }, 500);
    } else if (img.src === pokemonInfo.sprites.back_default) {
      if (pokemonInfo.sprites.front_shiny != null) {
        img.src = pokemonInfo.sprites.front_shiny;
        img.style.animationName = "Jump";
        setTimeout(() => {
          img.style.animationName = "";
        }, 500);
        setShiny(true);
      } else {
        img.src = pokemonInfo.sprites.front_default;
        img.style.animationName = "Jump";
        setTimeout(() => {
          img.style.animationName = "";
        }, 500);
        setShiny(false);
      }
    } else if (img.src === pokemonInfo.sprites.front_shiny) {
      img.src = pokemonInfo.sprites.back_shiny;
      img.style.animationName = "Jump";
      setTimeout(() => {
        img.style.animationName = "";
      }, 500);
      setShiny(true);
    } else if (img.src === pokemonInfo.sprites.back_shiny) {
      img.src = pokemonInfo.sprites.front_default;
      img.style.animationName = "Jump";
      setTimeout(() => {
        img.style.animationName = "";
      }, 500);
      setShiny(false);
    }
  };
  return pokemonInfo !== "" && reload === true ? (
    <CardContainer>
      <figure onClick={() => setImage()}>
        <img
          id={`img${pokemonInfo.id}`}
          src={
            defaultShiny === true
              ? pokemonInfo.sprites.front_shiny
              : pokemonInfo.sprites.front_default
          }
          alt=""
        />
      </figure>

      {pokemonInfo.id.toString().length === 1 ? (
        <span>N°00{pokemonInfo.id}</span>
      ) : pokemonInfo.id.toString().length === 2 ? (
        <span>N°0{pokemonInfo.id}</span>
      ) : (
        <span>N°{pokemonInfo.id} </span>
      )}
      <h2>
        {pokemonInfo.name} {isShiny === true ? <span>Shiny</span> : ""}
      </h2>
      <div>
        {pokemonInfo.types.map((item) => (
          <PokeType type={item.type.name}>{item.type.name}</PokeType>
        ))}
      </div>
    </CardContainer>
  ) : (
    ""
  );
};
