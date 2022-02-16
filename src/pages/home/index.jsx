import { PageContainer, ContainerCards, ContainerContent } from "./style";
import { PokemonCard } from "../../components/pokemonCard";
import { ImSearch } from "react-icons/im";
import { API } from "../../services";
import { useState } from "react";
import { useEffect } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Logo from "../../assets/imgs/logo.svg";
import axios from "axios";
export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setSearch] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState(null);
  const [pageNav, setPageNav] = useState("");
  const [pageCounter, setPageCounter] = useState(1);
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    API.get("/pokemon").then((res) => {
      setNext(res.data.next);
      setPrevious(res.data.previous);
      setPokemons(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (pageNav === "next" && next != null) {
      axios.get(next).then((res) => {
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setPokemons(res.data.results);
        console.log(res.data.results);
      });
    } else if (pageNav === "previous" && previous != null) {
      axios.get(previous).then((res) => {
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setPokemons(res.data.results);
      });
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
    API.get("/pokemon").then((res) => {
      setNext(res.data.next);
      setPrevious(res.data.previous);
      setPokemons(res.data.results);
    });
  };
  useEffect(() => {
    console.log(filteredPokemons);
  }, [filteredPokemons]);
  return (
    <PageContainer>
      <ContainerContent>
        <header>
          <img src={Logo} alt="" srcset="" onClick={() => ResetPokemons()} />
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
                  <PokemonCard pokemonName={poke.name} />
                ))
              : pokemons.length > 0
              ? pokemons.map((poke) => <PokemonCard pokemonName={poke.name} />)
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
