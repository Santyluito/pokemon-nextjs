import { Layout } from "@/components/layouts";
import { GetStaticProps, NextPage } from "next";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";
import pokeApi from "../api/pokeApi";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="center">
          {pokemons.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
