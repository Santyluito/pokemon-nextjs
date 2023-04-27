import { Card, Grid } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoriteCardPokemon = ({ id }: Props) => {
  const router = useRouter();

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        {/* <Link href={`/pokemon/${id}`}> */}
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={160}
          onClick={() => router.push(`/pokemon/${id}`)}
        />
        {/* </Link> */}
      </Card>
    </Grid>
  );
};
