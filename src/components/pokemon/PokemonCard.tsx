import { FC } from "react";
import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <>
      <Grid xs={6} sm={3} md={2} key={pokemon.id}>
        <Card isHoverable isPressable variant="bordered" onClick={onClick} >
          <Card.Body css={{ paddingBlockStart: 20 }}>
            <Card.Image
              src={pokemon.img}
              width="80%"
              objectFit="contain"
              alt={pokemon.name}
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-around">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};


