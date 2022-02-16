import { CardContainer, PokeType } from "./style";
import { API } from "../../services";
import { useState } from "react";
import { useEffect } from "react";
export const PokemonCard = ({ pokemonName }) => {
  const [pokemonInfo, setPokemonInfo] = useState("");
  const [reload, setReload] = useState(true);
  const [isShiny, setShiny] = useState(false);
  useEffect(() => {
    API.get(`/pokemon-form/${pokemonName}`).then((res) => {
      setPokemonInfo(res.data);
    });
  }, []);

  useEffect(() => {
    setShiny(false);
    setReload(false);
    API.get(`/pokemon-form/${pokemonName}`).then((res) => {
      setPokemonInfo(res.data);

      setReload(true);
    });
  }, [pokemonName]);

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
  return pokemonInfo.length != "" && reload === true ? (
    <CardContainer>
      <figure onClick={() => setImage()}>
        <img
          id={`img${pokemonInfo.id}`}
          src={pokemonInfo.sprites.front_default}
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
