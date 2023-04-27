import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { existFavorities, getPokemonInfo, toggleFavorite } from "@/utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { PokemonFull, PokemonListResponse } from "@/interfaces";
import { useState } from "react";
import confetti from "canvas-confetti";
import pokeApi from "@/api/pokeApi";

interface Props {
  pokemon: PokemonFull;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorities, setIsInFavorities] = useState(
    existFavorities(pokemon.id)
  );

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorities(!isInFavorities);
    if (!isInFavorities) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginBlockStart: 5 }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card isHoverable>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button
                ghost={!isInFavorities}
                shadow
                color={"gradient"}
                onPress={onToggleFavorite}
              >
                {isInFavorities ? "Ya esta guardado" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} weight="semibold">
                Sprites:
              </Text>
              <Container display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonByNamePage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
