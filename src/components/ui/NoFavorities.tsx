import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

export const NoFavorities = () => {
  return (
    <Container
      css={{
        height: "calc(100vh - 100px)",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Text h2>No hay favoritos</Text>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`}
        alt="sss"
        width={150}
        height={150}
        style={{ opacity: 0.1 }}
      />
    </Container>
  );
};
