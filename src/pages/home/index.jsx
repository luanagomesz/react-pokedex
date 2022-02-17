import { PageContainer, ContainerCards, ContainerContent } from "./style";
import { PokemonCard } from "../../components/pokemonCard";
import { ImSearch } from "react-icons/im";
import { API } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Logo from "../../assets/imgs/logo.svg";
import useGet from "../../services/useGet";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setSearch] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState(null);
  const [pageNav, setPageNav] = useState("");
  const [pageCounter, setPageCounter] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [url, setUrl] = useState("/pokemon");
  const [isMounted, setIsMounted] = useState(false);
  const [defaultShiny, setDefault] = useState(false);
  const [modalShiny, setModalShiny] = useState(false);
  const { data } = useGet(url);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted === true) {
      setPokemons(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    }
  }, [data]);

  useEffect(() => {
    if (pageNav === "next" && next != null) {
      setUrl(next);
    } else if (pageNav === "previous" && previous != null) {
      setUrl(previous);
    }
  }, [pageCounter]);

  const SearchPokemon = () => {
    if (userInput === "") {
      setSearch([]);
    } else {
      API.get("/pokemon?limit=1118&offset=0").then((res) => {
        setSearch(
          res.data.results.filter((item) =>
            item.name.toUpperCase().includes(userInput.toUpperCase())
          )
        );
      });
    }
  };
  const ResetPokemons = () => {
    setSearch([]);
    setUrl("/pokemon");
  };

  const CloseModal = () => {
    let modal = document.getElementById("shinybox");
    modal.style.animationName = "slideoff";

    setTimeout(() => {
      modal.style.animationName = "slide";
      setModalShiny(false);
      let openModal = document.getElementById("openShiny");
      openModal.style.animationName = "fadeIn";
    }, 500);
  };

  return (
    <PageContainer>
      <ContainerContent>
        <header>
          <img
            src={Logo}
            alt="PokéDex"
            srcset=""
            onClick={() => ResetPokemons()}
          />

          <div>
            <p className="text">Pesquise seu pokémon!</p>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    SearchPokemon();
                  }
                }}
              />
              <button
                onClick={() => {
                  SearchPokemon();
                }}
              >
                <ImSearch />
              </button>
            </div>
          </div>
          {modalShiny === true ? (
            <div className="shinybox" id="shinybox">
              <div>
                <p>Shiny?</p>
                {defaultShiny === true ? (
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked
                    onClick={() =>
                      defaultShiny === false
                        ? setDefault(true)
                        : setDefault(false)
                    }
                  ></input>
                ) : (
                  <input
                    id="checkbox"
                    type="checkbox"
                    onClick={() =>
                      defaultShiny === false
                        ? setDefault(true)
                        : setDefault(false)
                    }
                  ></input>
                )}

                <BsChevronDoubleUp
                  onClick={() => {
                    CloseModal();
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="openShiny" id="openShiny">
              <BsChevronDoubleDown
                onClick={(e) => {
                  setModalShiny(true);
                }}
              />
            </div>
          )}
        </header>

        <ContainerCards>
          <div className="pages">
            {filteredPokemons.length > 0 ? (
              <div className="voltar">
                {" "}
                <button onClick={() => setSearch([])}>voltar</button>
                <p>Resulta da busca:</p>
              </div>
            ) : (
              <>
                <div>
                  {previous != null ? (
                    <>
                      <button
                        onClick={() => {
                          setPageNav("previous");
                          setPageCounter(pageCounter - 1);
                        }}
                      >
                        <GrFormPreviousLink />
                      </button>
                      <p>Anterior</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {next != null ? (
                    <>
                      <p>proximo</p>
                      <button
                        onClick={() => {
                          setPageNav("next");
                          setPageCounter(pageCounter + 1);
                        }}
                      >
                        <GrFormNextLink />
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )}
          </div>
          <div className="container">
            {filteredPokemons.length > 0
              ? filteredPokemons.map((poke) => (
                  <PokemonCard
                    pokemonName={poke.name}
                    defaultShiny={defaultShiny}
                  />
                ))
              : pokemons.length > 0
              ? pokemons.map((poke) => (
                  <PokemonCard
                    pokemonName={poke.name}
                    defaultShiny={defaultShiny}
                  />
                ))
              : ""}
          </div>
        </ContainerCards>
      </ContainerContent>
      <footer>
        <span>@Luana Gomes</span>
        <AiOutlineLinkedin
          onClick={() => {
            window
              .open("https://www.linkedin.com/in/luana-gomesz", "_blank")
              .focus();
          }}
        />
        <AiOutlineGithub
          onClick={() => {
            window.open("https://github.com/luanagomesz", "_blank").focus();
          }}
        />
      </footer>
    </PageContainer>
  );
};
